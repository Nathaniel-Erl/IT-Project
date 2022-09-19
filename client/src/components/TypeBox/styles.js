import { Box, Modal, styled } from "@mui/material";

const Container = styled(Box) (({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "89vh",
}));

const StyledBox = styled(Box) ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "400px",
    height: "230px",
    backgroundColor: "#FFFFFF",
    padding : "20px",
    borderRadius : "4px",
    margin: "auto",
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
});

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export { Container, StyledBox, StyledModal };
