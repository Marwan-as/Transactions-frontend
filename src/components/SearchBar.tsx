import React from "react";

interface SearchBarProps {
  handleChange: (value: string | null) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleChange, className = "" }) => {
  return (
    <div className={`${className}  flex items-center bg-gray-200 rounded-full px-4 py-2 max-w-lg mx-auto`}>
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent text-black focus:outline-none"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="text-black" type="button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
