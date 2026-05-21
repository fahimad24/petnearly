"use client";

import Link from "next/link";

const SearchForm = () => {
  const searchText = "";
  const selectedSpecies = [];
  const sortBy = "newest";

  const speciesOptions = ["Dog", "Cat", "Rabbit", "Bird", "Other"];
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchParams = new URLSearchParams(formData);
    const queryString = searchParams.toString();
  };
  return (
    <form
      onSubmit={handleSearch}
      className="mb-8 grid gap-4 md:grid-cols-4 bg-white p-4 rounded-xl shadow-sm border border-primary/10"
    >
      <div className="md:col-span-2">
        <label
          htmlFor="search"
          className="block text-sm font-semibold mb-2 text-light-text"
        >
          Search by name
        </label>
        <input
          id="search"
          name="search"
          defaultValue={searchText}
          placeholder="Search pets..."
          className="w-full rounded-lg border border-primary/20 px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div>
        <label
          htmlFor="species"
          className="block text-sm font-semibold mb-2 text-light-text"
        >
          Filter by species
        </label>
        <select
          id="species"
          name="species"
          multiple
          defaultValue={selectedSpecies}
          className="w-full min-h-11 rounded-lg border border-primary/20 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
        >
          {speciesOptions.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="sort"
          className="block text-sm font-semibold mb-2 text-light-text"
        >
          Sort
        </label>
        <select
          id="sort"
          name="sort"
          defaultValue={sortBy}
          className="w-full rounded-lg border border-primary/20 px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
        </select>
      </div>

      <div className="md:col-span-4 flex items-center gap-3">
        <button
          type="submit"
          className="rounded-lg bg-primary text-white px-5 py-2.5 font-semibold hover:bg-primary/90 transition"
        >
          Apply
        </button>
        <Link
          href="/all-pets"
          className="rounded-lg border border-primary/25 text-primary px-5 py-2.5 font-semibold hover:bg-primary/5 transition"
        >
          Reset
        </Link>
      </div>
    </form>
  );
};

export default SearchForm;
