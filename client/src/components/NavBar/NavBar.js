import React, { useState } from 'react'
import { StyledAppBar, StyledToolbar, Logo } from "./styles";
import { Menu, MenuItem } from '@mui/material'
import logo from '../../images/logo.svg'
import { Typography } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavBar = ({ title }) => {
  const [open, setOpen] = useState(false)

  return (
    <StyledAppBar>
      <StyledToolbar>
        <div style={{ flexGrow: 1, flexBasis: 0 }}>
          <Logo
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
          <AccountCircleIcon
            style={{ marginLeft: "auto", color: "black" }}
            onClick={() => setOpen(true)}
          />
        </div>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Account Settings</MenuItem>
      </Menu>
    </StyledAppBar>
  );
}

export default NavBar