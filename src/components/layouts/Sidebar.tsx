"use client";

import { Drawer } from "@mui/material";
import { ReactNode } from "react";

const drawerWidth = 262;

interface SidebarProps {
  menuContent: ReactNode;
  isOpen: boolean;
  onDrawerToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  menuContent,
  isOpen,
  onDrawerToggle,
}) => {
  return (
    <Drawer
      variant="temporary"
      open={isOpen}
      onClose={onDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          p: 2,
        },
      }}
    >
      {menuContent}
    </Drawer>
  );
};

export default Sidebar;
