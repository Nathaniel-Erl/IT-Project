import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, {useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import SignUpForm from "../components/Settings/SettingsForm.js";
import SignOutButton from "../components/Buttons/SignOutButton.js";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../static/actionType";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../components/Settings/styles";

function Settings() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  
  const logout = () => {
    dispatch({ type: LOGOUT })
    setUser(null);
    navigate('/')
  }

  return (
    <>
      <NavBar title="Settings" />
      {/* contains everything */}

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
      <MainContainer>
          <SignUpForm user={user} title="Settings" button="Save Changes" link="/quiz" />
      </MainContainer>
      </Box>
      <Button onClick={logout}>
        <SignOutButton title="Log Out"></SignOutButton>
      </Button>
    </>
  );
}

export default Settings;
