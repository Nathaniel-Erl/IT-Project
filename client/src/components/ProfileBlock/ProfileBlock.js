import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, CardContent, CardMedia } from "@mui/material";
import * as colors from "../../static/Colors";
import * as font_sizes from "../../static/FontSizes";
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
          <CardMedia
            sx={{ objectFit: "cover" }}
            component="img"
            height="200"
            image={profile}
            alt="profile"
          />
          Username
        </Grid>
        <Grid item xs={12}>
          Badges
          <CardMedia
            sx={{ objectFit: "cover" }}
            component="img"
            height="200"
            image={badge1}
            alt="badge1"
          />
          <CardMedia
            sx={{ objectFit: "cover" }}
            component="img"
            height="200"
            image={badge2}
            alt="badge2"
          />
          <CardMedia
            sx={{ objectFit: "cover" }}
            component="img"
            height="200"
            image={badge3}
            alt="badge3"
          />
          <CardMedia
            sx={{ objectFit: "cover" }}
            component="img"
            height="200"
            image={badge4}
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
