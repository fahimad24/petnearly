// app/components/PetFilterSearch.jsx
"use client";

import { ChevronDown, Magnifier } from "@gravity-ui/icons";
import { useState } from "react";

export default function PetFilterSearch({ setSearch, setSpecies, setSortBy }) {
  const [filters, setFilters] = useState({
    searchTerm: "",
    species: "",
    sortBy: "",
  });

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    const updated = { ...filters, searchTerm: newSearchTerm };
    setFilters(updated);
    setSearch(newSearchTerm);
  };

  const handleSpeciesChange = (e) => {
    const newSpecies = e.target.value;
    const updated = { ...filters, species: newSpecies };
    setFilters(updated);
    setSpecies(newSpecies);
  };

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    const updated = { ...filters, sortBy: newSort };
    setFilters(updated);
    setSortBy(newSort);
  };

  const clearFilters = () => {
    const clearedFilters = {
      searchTerm: "",
      species: "",
      sortBy: "",
    };
    setFilters(clearedFilters);
    setSearch("");
    setSpecies("");
    setSortBy("");
  };

  const hasActiveFilters =
    filters.searchTerm || filters.species || filters.sortBy;

  return (
    <div className="bg-white border border-primary rounded-xl p-5 sticky top-24 mb-10">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-black text-gray-800">Filter & Search</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary hover:text-primary/80 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {/* Search by name */}

        <div className="col-span-2">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Search by name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Magnifier className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="search"
              value={filters.searchTerm}
              onChange={handleSearchChange}
              placeholder="Search pets..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg 
                       bg-white text-gray-900 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                       transition duration-150 ease-in-out"
            />
          </div>
        </div>
        {/* Filter by species */}
        <div>
          <label
            htmlFor="species"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Filter by species
          </label>
          <div className="relative">
            <select
              id="species"
              value={filters.species}
              onChange={handleSpeciesChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg
                       bg-white text-gray-900 appearance-none
                       focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                       transition duration-150 ease-in-out"
            >
              <option value="">All species</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Hamster">Hamster</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Sort by fee */}
        <div>
          <label
            htmlFor="sort"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Sort by fee
          </label>
          <div className="relative">
            <select
              id="sort"
              value={filters.sortBy}
              onChange={handleSortChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg
                       bg-white text-gray-900 appearance-none
                       focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                       transition duration-150 ease-in-out"
            >
              <option value="">Default</option>
              <option value="fee-low-to-high">Fee: Low to High</option>
              <option value="fee-high-to-low">Fee: High to Low</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Magnifier className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Active filters display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-3 border-t border-gray-200">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Active Filters
          </h3>
          <div className="flex flex-wrap gap-2">
            {filters.searchTerm && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Search: {filters.searchTerm}
              </span>
            )}
            {filters.species && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Species: {filters.species}
              </span>
            )}
            {filters.sortBy && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Sort:{" "}
                {filters.sortBy === "fee-high-to-low"
                  ? "High to Low"
                  : "Low to High"}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
