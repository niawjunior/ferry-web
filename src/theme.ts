"use client";
import { createTheme } from "@mui/material/styles";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const theme = createTheme({
  typography: {
    fontFamily: kanit.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#E26609",
    },
  },
});

export default theme;
