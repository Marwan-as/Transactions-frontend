import React, { JSX, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { NavbarItem, SidebarItem } from "../utils/types";
import Sidebar from "./Sidebar";

const navItems: NavbarItem[] = [
  { title: "Sign Up", href: "/sign-up", icon: "fas fa-user-plus" },
  { title: "Sign In", href: "/sign-in", icon: "fas fa-user" },
];

const sidebarItems: SidebarItem[] = [{ title: "Create Transaction", href: "/transactions/create", icon: "fas fa-file" }];

const AppLayout: React.FC = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} items={navItems} />
      <Sidebar isOpen={isSidebarOpen} items={sidebarItems} />
      <Outlet />
    </>
  );
};

export default AppLayout;
