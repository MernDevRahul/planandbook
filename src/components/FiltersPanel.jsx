import { ChevronRight } from 'lucide-react'
import React from 'react'

const FiltersPanel = ({ duration, setDuration, budget, setBudget }) => {
  return (

    <div className="w-[380px] bg-white rounded-lg shadow p-5 h-fit">

      <h2 className="text-xl font-semibold mb-4">Filters</h2> 
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
        <input
          type="range"
          min="1"
          max="14"
          value={duration[1]}
          onChange={(e) => setDuration([1, e.target.value])}
          className="w-full accent-teal-600"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>1N</span>
          <span>14N</span>
        </div>
      </div>

      {/* Budget */}
      <div className="border-b pb-4 mb-4">
        <p className="font-medium mb-2">Budget (per person)</p>
        <input
          type="range"
          min="8000"
          max="300000"
          value={budget[1]}
          onChange={(e) => setBudget([8000, e.target.value])}
          className="w-full accent-teal-600"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>₹8,000</span>
          <span>₹3,00,000</span>
        </div>
      </div>

    </div>
  )
}

export default FiltersPanel
