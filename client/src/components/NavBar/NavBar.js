import React from "react";
import { StyledAppBar, StyledToolbar, Logo } from "./styles";
import logo from "../../images/logo.svg";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ title }) => {
  const navigate = useNavigate()

  return (
    <StyledAppBar position="fixed" sx={{ top: 0, bottom: 0 }}>
      <StyledToolbar>
        <div style={{ flexGrow: 1, flexBasis: 0 }}>
          <Logo
            onClick={() => navigate('/api/quiz')}
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
          <Link to="/api/settings">
              <AccountCircleIcon
                id="basic-button"
                style={{ marginLeft: "auto", color: "black" }}
              ></AccountCircleIcon>
            </Link>

          
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;
