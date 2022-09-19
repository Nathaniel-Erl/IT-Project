import { Box, styled } from "@mui/material";

const SABox = styled(Box)(({ theme }) => ({
  width: "400px",
  margin: "20px",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  padding: "20px",
  margin: "auto",
  overflow: "hidden",
  overflowY: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "98vh",
    borderRadius: "0",
  },
  [theme.breakpoints.down("md")]: {
    width: "100vw",
    height: "98vh",
    borderRadius: "0",
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
  width: "30rem",
  height: "auto",
});

const MainContainer = styled(Box)({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  padding: "100px",
  height: "auto",
});

const LogoText = styled(Box)({
  height: "auto",
  padding: "50px",
});

export { SABox, Form, Logo, MainContainer, LogoText };
