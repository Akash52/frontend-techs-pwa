import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <>
      <div className="flex flex-1">
        <input
          className="block h-full rounded-md shadow-sm border sm:text-sm container mx-auto py-2 px-2 items-center outline-none focus:outline-none"
          placeholder="Search For Rental"
          type="search"
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
