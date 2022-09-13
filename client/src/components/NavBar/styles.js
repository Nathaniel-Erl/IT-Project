import { AppBar, styled, Toolbar } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  //alignItems: "center",
  justifyContent: "space-between"
});

const Logo = styled("img")({
  width: '10rem',
  height: "auto"
});

const StyledAppBar = styled(AppBar)({
  position: "sticky",
  backgroundColor: "#EDEDED",
});

export {
  StyledToolbar,
  Logo,
  StyledAppBar,
}