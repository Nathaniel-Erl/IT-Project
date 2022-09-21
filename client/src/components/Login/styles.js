import { Box, styled } from "@mui/material";

const SABox = styled(Box)(({ theme }) => ({
  width: "40vw",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  padding: "20px",
  margin: "0vw",
  overflow: "hidden",
  overflowY: "hidden",
  border: "solid black 2px",
  [theme.breakpoints.down("sm")]: {
    width: "50vw",
    borderRadius: "0",
    padding: "20px",
  },
  [theme.breakpoints.down("md")]: {
    width: "90vw",
    borderRadius: "0",
    padding: "60px",
  },
}));

const Form = styled("form")({
  autoComplete: "off",
  noValidate: "true",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "space-between",
});

const Logo = styled("img")({
  height: "auto",
});

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "0",
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    display: "grid",
    height: "100vh",
  },
  [theme.breakpoints.down("md")]: {
    display: "grid",
    height: "100vh",
  },
}));

const LogoText = styled(Box)(({ theme }) => ({
  display: "grid",
  width: "40vw",
  justifyContent: "center",
  marginLeft: "5vw",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    marginLeft: "0vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "100vw",
    marginLeft: "0vw",
  },
}));

export { SABox, Form, Logo, MainContainer, LogoText };
