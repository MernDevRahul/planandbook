import { ChevronRight } from "lucide-react";
import React from "react";

const FiltersPanel = ({ duration, setDuration, budget, setBudget }) => {
  return (
    <div className="w-[380px] bg-white rounded-lg shadow p-5 h-fit">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <hr />

      {/* Destination */}
      <div className="border-b pb-4 mb-4 mt-4">
        <p className="font-medium mb-2">Destination</p>
        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-between">
            India <ChevronRight size={16} />
          </button>
          <button className="flex items-center justify-between">
            International <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Duration */}
      <div className="border-b pb-4 mb-4">
        <p className="font-medium mb-2">Duration (in nights)</p>

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
        <p className="font-medium mb-2">Budget (per person)</p>

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
