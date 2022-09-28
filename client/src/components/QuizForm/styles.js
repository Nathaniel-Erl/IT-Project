import { Box, Paper, styled } from "@mui/material";

const QFBox = styled(Box)(({ theme }) => ({
  width: "80vw",
  height: "85vh",
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
  gap: "2rem",
  justifyContent: "space-between",
});

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));


export { QFBox, Form, Item };
