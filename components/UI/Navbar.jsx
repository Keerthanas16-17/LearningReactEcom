"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Login", href: "/Login", icon: <LoginIcon /> },
  { label: "Home", href: "/", icon: <HomeIcon /> },
  { label: "About", href: "/About", icon: <InfoIcon /> },
  { label: "Contacts", href: "/Contacts", icon: <ContactsIcon /> },
  { label: "Menu", href: "/Menu", icon: <MenuBookIcon /> },
  { label: "Search", href: "/Search", icon: <SearchIcon /> },
  { label: "Location", href: "/Location", icon: <LocationOnIcon /> },
  { label: "Dashboard", href: "/Dashboard", icon: <DashboardIcon /> },
  { label: "Product", href: "/Product", icon: <ShoppingBagIcon /> },
  { label: "Logout", href: "/Logout", icon: <LogoutIcon /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation showLabels value={pathname}>
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
