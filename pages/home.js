import Link from "next/link";
import NavBar from "../components/HomeNavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  //createTheme is a function that takes in a theme object and returns a ThemeProvider
  palette: {
    primary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000000"
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000000"
    }
  }
});

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}
