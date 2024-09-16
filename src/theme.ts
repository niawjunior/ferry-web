"use client"
import { createTheme } from "@mui/material/styles"
import { Kanit } from "next/font/google"

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const theme = createTheme({
  typography: {
    fontFamily: kanit.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#E26609",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none", // Remove underline
          "&:hover": {
            textDecoration: "none", // Keep underline removed on hover as well
          },
        },
      },
    },
  },
})

export default theme
