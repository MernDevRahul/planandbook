import { ChevronRight } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const FiltersPanel = ({ duration, setDuration, budget, setBudget }) => {
  const [isIndiaOpen, setIsIndiaOpen] = useState(false);
  const [isIntlOpen, setIsIntlOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedRegionType, setSelectedRegionType] = useState(null); // 'india' | 'international'
  const [selectedIntlRegions, setSelectedIntlRegions] = useState([]);
  const [selectedIndiaRegions, setSelectedIndiaRegions] = useState([]);

  const indiaRegions = [
    "Rajasthan",
    "Kashmir",
    "Meghalaya",
    "Sikkim",
    "Andaman",
    "Spiti",
    "Ladakh",
    "Nagaland",
    "Kerala",
    "Arunachal Pradesh",
    "Uttarakhand",
    "Himachal Pradesh",
    "Weekend Getaways",
  ];

  const intlRegions = [
    "Europe",
    "Philippines",
    "France",
    "Japan",
    "Maldives",
    "Australia",
    "Switzerland",
    "Thailand",
    "Malaysia",
    "Turkey",
    "Sri Lanka",
    "Kenya",
    "Dubai",
    "Spain",
    "Bali",
    "South Africa",
    "Vietnam",
    "Kazakhstan",
    "New Zealand",
    "Singapore",
    "Mauritius",
  ];

  const indiaPanelRef = useRef(null);
  const intlPanelRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (isIndiaOpen && indiaPanelRef.current && !indiaPanelRef.current.contains(e.target)) {
        setIsIndiaOpen(false);
      }
      if (isIntlOpen && intlPanelRef.current && !intlPanelRef.current.contains(e.target)) {
        setIsIntlOpen(false);
      }
    }
    if (isIndiaOpen || isIntlOpen) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [isIndiaOpen, isIntlOpen]);

  return (
    <div className="w-[380px] bg-white rounded-lg shadow p-5 h-fit">
      <h2 className="text-lg font-semibold mb-4 text-black">Filters</h2>
      <hr className="text-black/60" />

      {/* Destination */}
      <div className="border-b border-black/60 pb-4 mb-4 mt-4 relative">
        <p className="font-medium mb-2 text-black">Destination</p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => {
              setIsIndiaOpen((s) => !s);
              if (!isIndiaOpen) setIsIntlOpen(false);
            }}
            className="flex items-center justify-between text-black/60"
            aria-expanded={isIndiaOpen}
            aria-controls="india-menu"
          >
            <span>
              {selectedIndiaRegions.length === 0
                ? "India"
                : selectedIndiaRegions.length === 1
                ? selectedIndiaRegions[0]
                : `India (${selectedIndiaRegions.length})`}
            </span>
            <ChevronRight size={16} className={`${isIndiaOpen ? "rotate-90 transform" : ""}`} />
          </button>

          <button
            onClick={() => {
              setIsIntlOpen((s) => !s);
              if (!isIntlOpen) setIsIndiaOpen(false);
            }}
            className="flex items-center justify-between text-black/60"
            aria-expanded={isIntlOpen}
            aria-controls="international-menu"
          >
            <span>
              {selectedIntlRegions.length === 0
                ? "International"
                : selectedIntlRegions.length === 1
                ? selectedIntlRegions[0]
                : `International (${selectedIntlRegions.length})`}
            </span>
            <ChevronRight size={16} className={`${isIntlOpen ? "rotate-90 transform" : ""}`} />
          </button>
        </div>

        {isIndiaOpen && (
          <div
            id="india-menu"
            ref={indiaPanelRef}
            onMouseDown={(e) => e.stopPropagation()}
            className="absolute left-full ml-10 top-0 w-72 bg-white rounded-lg shadow-2xl p-4 z-50"
          >
            <div className="flex flex-col gap-2 text-md text-black/60 overflow-y-auto">
              {indiaRegions.map((r) => {
                const checked = selectedIndiaRegions.includes(r);
                return (
                  <label key={r} className={`flex items-center gap-2 py-1 px-2 rounded hover:bg-(--primary) hover:text-white ${checked ? "bg-gray-100 font-medium" : ""}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        e.stopPropagation();
                        setSelectedIndiaRegions((prev) => {
                          if (prev.includes(r)) {
                            const next = prev.filter((x) => x !== r);
                            if (next.length === 0 && selectedRegionType === "india") setSelectedRegionType(null);
                            return next;
                          } else {
                            setSelectedRegionType("india");
                            return [...prev, r];
                          }
                        });
                      }}
                      className="w-4 h-4 custom-checkbox"
                    />
                    {r}
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {isIntlOpen && (
          <div
            id="international-menu"
            ref={intlPanelRef}
            onMouseDown={(e) => e.stopPropagation()}
            className="absolute left-full ml-10 top-0 w-72 bg-white rounded-lg shadow-2xl p-4 z-50"
          >
            <div className="flex flex-col gap-2 text-md text-black/60 max-h-120 overflow-y-auto">
              {intlRegions.map((r) => {
                const checked = selectedIntlRegions.includes(r);
                return (
                  <label key={r} className={`flex items-center gap-2 py-1 px-2 rounded hover:bg-(--primary) hover:text-white ${checked ? "bg-gray-100 font-medium" : ""}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        e.stopPropagation();
                        setSelectedIntlRegions((prev) => {
                          if (prev.includes(r)) {
                            const next = prev.filter((x) => x !== r);
                            if (next.length === 0 && selectedRegionType === "international") setSelectedRegionType(null);
                            return next;
                          } else {
                            setSelectedRegionType("international");
                            return [...prev, r];
                          }
                        });
                      }}
                      className="w-4 h-4 custom-checkbox"
                    />
                    {r}
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Duration */}
      <div className="border-b pb-4 mb-4">
        <p className="font-medium mb-2 text-black">Duration (in nights)</p>

        <div className="relative w-full mt-3">
          {/* Track */}
          <div className="h-1 bg-gray-300 rounded relative">
            <div
              className="h-1 bg-(--primary) absolute rounded"
              style={{
                left: `${(duration[0] / 14) * 100}%`,
                width: `${((duration[1] - duration[0]) / 14) * 100}%`,
              }}
            />
          </div>

          {/* Left Thumb */}
          <input
            type="range"
            min="1"
            max="14"
            value={duration[0]}
            onChange={(e) =>
              setDuration([
                Math.min(Number(e.target.value), duration[1] - 1),
                duration[1],
              ])
            }
            className="absolute top-0 w-full pointer-events-auto range-slider"
          />

          {/* Right Thumb */}
          <input
            type="range"
            min="0"
            max="14"
            value={duration[1]}
            onChange={(e) =>
              setDuration([
                duration[0],
                Math.max(Number(e.target.value), duration[0] + 1),
              ])
            }
            className="absolute top-0 w-full pointer-events-auto range-slider"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-500 mt-3">
          <span>{duration[0]}N</span>
          <span>{duration[1]}N</span>
        </div>
      </div>

      {/* Budget */}
      <div className="border-b pb-4 mb-4">
        <p className="font-medium mb-2 text-black">Budget (per person)</p>

        <div className="relative w-full mt-3">
          {/* Track */}
          <div className="h-1 bg-gray-300 rounded relative">
            <div
              className="h-1 bg-(--primary) absolute rounded"
              style={{
                left: `${((budget[0] - 8000) / (300000 - 8000)) * 100}%`,
                width: `${((budget[1] - budget[0]) / (300000 - 8000)) * 100}%`,
              }}
            />
          </div>

          {/* Left Thumb */}
          <input
            type="range"
            min="8000"
            max="300000"
            value={budget[0]}
            onChange={(e) =>
              setBudget([
                Math.min(Number(e.target.value), budget[1] - 1000),
                budget[1],
              ])
            }
            className="absolute top-0 w-full pointer-events-auto range-slider"
          />

          {/* Right Thumb */}
          <input
            type="range"
            min="8000"
            max="300000"
            value={budget[1]}
            onChange={(e) =>
              setBudget([
                budget[0],
                Math.max(Number(e.target.value), budget[0] + 1000),
              ])
            }
            className="absolute top-0 w-full pointer-events-auto range-slider"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-500 mt-3">
          <span>₹{new Intl.NumberFormat("en-IN").format(budget[0])}</span>
          <span>₹{new Intl.NumberFormat("en-IN").format(budget[1])}</span>
        </div>
      </div>

      
    </div>
  );
};

export default FiltersPanel;
