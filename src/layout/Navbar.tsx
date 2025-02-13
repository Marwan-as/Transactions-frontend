import React from "react";
import { Link } from "react-router";
import { NavbarItem } from "../utils/types";

interface NavbarProps {
  isSidebarOpen?: boolean;
  toggleSidebar?: () => void;
  items?: NavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items, isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 p-4  w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex justify-between">
          <button type="button" className="text-white block" onClick={toggleSidebar}>
            <i className={`fas ${isSidebarOpen ? "fa-times" : "fa-bars"} text-2xl md:text-sm`}></i>
          </button>
          <Link to="/" className="text-white text-2xl font-bold px-4">
            Transactions
          </Link>
        </div>

        <div className="flex justify-between gap-5">
          {items &&
            items.map((item, index) => {
              return (
                <Link to={item?.href} className="text-white block" title={item?.title} key={index}>
                  <i className={`${item?.icon}`}></i>
                </Link>
              );
            })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
