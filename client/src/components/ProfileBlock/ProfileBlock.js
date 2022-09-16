import React from "react";
// import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import * as constants from "../../static/Constants.js";
import badge1 from "../../images/badge1.png";
import badge2 from "../../images/badge2.png";
import badge3 from "../../images/badge3.png";
import badge4 from "../../images/badge4.png";
import profile from "../../images/profile.png";
import { Grid } from "@mui/material";
import { StyledAppBar } from "../NavBar/styles";

/**
 * @returns returns stuff on profile
 */
const ProfileBlock = () => {
  return (
    <>
      <StyledAppBar sx={{ top: 64 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          // sx={{ borderLeft: 2, borderColor: colors.GREY }}
        >
          <Grid item xs={12} sx={{ justifyContent: "center" }}>
            <Avatar
              sx={{
                height: constants.ICON_MEDIUM,
                width: constants.ICON_MEDIUM,
              }}
              src={profile}
              alt="profile"
            />
            Username
          </Grid>
          <Grid item xs={12}>
            Badges
            <Avatar
              sx={{
                height: constants.ICON_SMALL,
                width: constants.ICON_SMALL,
              }}
              src={badge1}
              alt="badge1"
            />
            <Avatar
              sx={{
                height: constants.ICON_SMALL,
                width: constants.ICON_SMALL,
              }}
              src={badge2}
              alt="badge2"
            />
            <Avatar
              sx={{
                height: constants.ICON_SMALL,
                width: constants.ICON_SMALL,
              }}
              src={badge3}
              alt="badge3"
            />
            <Avatar
              sx={{
                height: constants.ICON_SMALL,
                width: constants.ICON_SMALL,
              }}
              src={badge4}
              alt="badge4"
            />
          </Grid>
          <Grid item xs={12}>
            Level 999
          </Grid>
        </Grid>
      </StyledAppBar>
    </>
  );
};

export default ProfileBlock;
