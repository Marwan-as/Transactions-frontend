import React, { JSX, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { NavbarItem, SidebarItem } from "../utils/types";
import Sidebar from "./Sidebar";

const navItems: NavbarItem[] = [
  { title: "Sign In", href: "/sign-in", icon: "fas fa-user" },
  { title: "Sign Up", href: "/sign-up", icon: "fas fa-user-plus" },
];

const sidebarItems: SidebarItem[] = [{ title: "Create Transaction", href: "/transactions/create", icon: "fas fa-file" }];

const AppLayout: React.FC = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} items={navItems} />
        <Sidebar isOpen={isSidebarOpen} items={sidebarItems} />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
