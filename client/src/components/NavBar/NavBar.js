import React, { useState } from "react";
import { StyledAppBar, StyledToolbar, Logo } from "./styles";
import { Menu, MenuItem } from "@mui/material";
import logo from "../../images/logo.svg";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const NavBar = ({ title }) => {
  /*const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; */

  return (
    <StyledAppBar position="fixed" sx={{ top: 0, bottom: 0 }}>
      <StyledToolbar>
        <div style={{ flexGrow: 1, flexBasis: 0 }}>
          <Logo
            onClick={(event) => (window.location.href = "/dashboard")}
            src={logo}
            alt="quizy"
            sx={{ display: { xs: "none", sm: "block" } }}
          />
        </div>
        <Typography
          style={{ flexGrow: 1, flexBasis: 0 }}
          variant="h5"
          color="#666666"
          align="center"
        >
          {title}
        </Typography>
        <div style={{ flexGrow: 1, flexBasis: 0, textAlign: "right" }}>
          <Link to="/settings">
              <AccountCircleIcon
                id="basic-button"
                //aria-controls={open ? "basic-menu" : undefined}
                //aria-haspopup="true"
                //aria-expanded={open ? "true" : undefined}
                //onClick={handleClick}
                //component={Link}
                //to="/settings"
                //variant="contained"
                style={{ marginLeft: "auto", color: "black" }}
              ></AccountCircleIcon>
            </Link>

          {/*<Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem component={Link} to={"/settings"}>
              Account Settings
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu> */}
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;
