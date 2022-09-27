import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, {useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import SignUpForm from "../components/SignUp/SignUpForm";
import SignOutButton from "../components/Buttons/SignOutButton";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../static/actionType";
import { useNavigate } from "react-router-dom";

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
        <Grid container display="flex" justifyContent="center"  padding={3}>
          <Grid item xs={6}>
            <SignUpForm user={user} title="Settings" button="Save Changes" link="/quiz" />
          </Grid>
        </Grid>
      </Box>
      <Button onClick={logout}>
        <SignOutButton title="Log Out"></SignOutButton>
      </Button>
    </>
  );
}

export default Settings;
