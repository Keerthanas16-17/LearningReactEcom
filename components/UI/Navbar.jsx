"use client";

import { useState } from "react";

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

export default function Navbar() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Login"
          icon={<LoginIcon />}
          component={Link}
          href="/Login"
        />

        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          href="/"
        />

        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          component={Link}
          href="/About"
        />

        <BottomNavigationAction
          label="Contacts"
          icon={<ContactsIcon />}
          component={Link}
          href="/Contacts"
        />

        <BottomNavigationAction
          label="Menu"
          icon={<MenuBookIcon />}
          component={Link}
          href="/Menu"
        />

        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          component={Link}
          href="/Search"
        />

        <BottomNavigationAction
          label="Location"
          icon={<LocationOnIcon />}
          component={Link}
          href="/Location"
        />
        <BottomNavigationAction
          label="Dashboard"
          icon={<DashboardIcon />}
          component={Link}
          href="/Dashboard"
        />

        <BottomNavigationAction
          label="Product"
          icon={<ShoppingBagIcon />}
          component={Link}
          href="/Product"
        />

        <BottomNavigationAction
          label="Logout"
          icon={<LogoutIcon />}
          component={Link}
          href="/Logout"
        />
      </BottomNavigation>
    </Box>
  );
}
