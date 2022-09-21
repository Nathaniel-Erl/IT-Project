import { Box, styled } from "@mui/material";

const SABox = styled(Box)(({ theme }) => ({
  width: "30vw",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  padding: "20px",
  margin: "0vw",
  overflow: "hidden",
  overflowY: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    borderRadius: "0",
    padding: "5px",
    width: "80vw",
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: "0",
    padding: "20px",
    width: "80vw",
  },
}));

const Form = styled("form")({
  autoComplete: "off",
  noValidate: "true",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "1rem",
});

const Logo = styled("img")({
  height: "auto",
});

const MainContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textalign: "center",
  [theme.breakpoints.down("sm")]: {
    display: "grid",
    height: "70vh",
  },
  [theme.breakpoints.down("md")]: {
    display: "grid",
    height: "auto",
  },
}));

const LogoText = styled(Box)(({ theme }) => ({
  display: "grid",
  width: "50vw",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    margin: "0",
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  [theme.breakpoints.down("md")]: {
    width: "auto",
    margin: "0",
    padding: "0",
    paddingTop: "10px",
    paddingBottom: "20px",
  },
}));

export { SABox, Form, Logo, MainContainer, LogoText };
