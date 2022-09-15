import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, CardContent, CardMedia, Avatar } from "@mui/material";
import * as colors from "../../static/Colors";
import * as font_sizes from "../../static/FontSizes";
import * as constants from "../../static/Constants.js";
import badge1 from "../../images/badge1.png";
import badge2 from "../../images/badge2.png";
import badge3 from "../../images/badge3.png";
import badge4 from "../../images/badge4.png";
import profile from "../../images/profile.png";
import { Grid } from "@mui/material";

/**
 * @returns returns stuff on profile
 */
const ProfileBlock = ({ text, color, link }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
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
    </>
  );
};

export default ProfileBlock;
