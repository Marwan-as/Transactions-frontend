import React from "react";
import { Link } from "react-router-dom";
import { SidebarItem } from "../utils/types";

interface SidebarProps {
  isOpen?: boolean;
  items?: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, items }) => {
  return (
    <aside
      className={`fixed top-16 left-0 w-64 bg-gray-800 h-full p-4 transition-all duration-300 ease-in-out z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {items &&
        items.map((item, index) => {
          return (
            <Link to={item?.href} className="w-full px-4 py-2 text-gray-300 hover:bg-gray-700 flex items-center gap-2" title={item?.title} key={index}>
              <i className={`${item?.icon}`}></i>
              <span>{item?.title}</span>
            </Link>
          );
        })}
    </aside>
  );
};

export default Sidebar;
