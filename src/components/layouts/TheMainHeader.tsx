"use client";

import { Menu } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Container,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import { useState } from "react";
import NextLink from "next/link";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    href: "/admin/home",
    label: "หน้าหลัก",
  },
  {
    href: "/admin/addresses",
    label: "ข้อมูลทั่วไป",
  },
];

const TheMainHeader = () => {
  const [isSidebar, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebar);
  };

  const menuContent = (
    <Card sx={{ px: 1, py: 2 }}>
      <List
        sx={{
          "& a": {
            textDecoration: "unset",
          },
        }}
      >
        {menuItems.map((item, index) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <Link key={index} component={NextLink} href={item.href} passHref>
              <ListItem
                sx={
                  isActive
                    ? {
                        color: "#fff",
                        backgroundColor: "primary.main",

                        "&:hover": {
                          color: "#fff",
                          backgroundColor: "primary.dark",
                        },
                      }
                    : {}
                }
                onClick={handleSidebarToggle}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Card>
  );

  return (
    <>
      <Box
        component="header"
        sx={{
          width: '100%',
          alignSelf: "flex-start",
          position: "sticky",
          top: 0,
          py: {
            xs: 1,
            md: 1.5,
          },
          background: "rgba(0,0,0, 0.3)",
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Stack
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                alignItems: "center",
              }}
            >
              <Menu sx={{ color: "#fff" }} onClick={handleSidebarToggle} />
              <Sidebar
                menuContent={menuContent}
                isOpen={isSidebar}
                onDrawerToggle={handleSidebarToggle}
              />
            </Stack>
            <Stack alignItems="center">
              <NextLink href="/">
                <Avatar sx={{ width: 50, height: 50 }} src="/logo.png" />
              </NextLink>
            </Stack>
            <Stack direction="row" gap={1}>
              {menuItems.map((menuItem) => {
                return (
                  <Link
                    key={menuItem.href}
                    component={NextLink}
                    href={menuItem.href}
                  >
                    {menuItem.label}
                  </Link>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default TheMainHeader;
