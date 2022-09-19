import React from "react";
// import { Link } from "react-router-dom";
import { Avatar, LinearProgress } from "@mui/material";
import * as constants from "../../static/Constants.js";
import badge1 from "../../images/badge1.png";
import badge2 from "../../images/badge2.png";
import badge3 from "../../images/badge3.png";
import badge4 from "../../images/badge4.png";
import profile from "../../images/profile.png";
import { Grid } from "@mui/material";
import { StyledAppBar } from "../NavBar/styles";
import { BLACK } from "../../static/Colors.js";

/**
 * @returns returns stuff on profile
 */
const ProfileBlock = () => {
  const badges = [badge1, badge2, badge3, badge4];
  return (
    <>
      <StyledAppBar sx={{ top: 64, minHeight: 400, width: 700 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            pt={2}
            sx={{
              minWidth: 1,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: BLACK,
            }}
          >
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
          <Grid
            item
            pt={2}
            sx={{
              minWidth: 1,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: BLACK,
            }}
          >
            Badges
            {/* badges container */}
            <Grid
              container
              sx={{
                minWidth: 1,
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: BLACK,
              }}
            >
              {badges.map((badge) => (
                <Grid item p={0.3}>
                  <Avatar
                    sx={{
                      height: constants.ICON_SMALL,
                      width: constants.ICON_SMALL,
                    }}
                    src={badge}
                    alt={badge}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            pt={2}
            sx={{
              minWidth: 1,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: BLACK,
            }}
          >
            Level 999
            <Grid container p={1}>
              <Grid xs item>
                <LinearProgress value={50} variant="determinate" title="test" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledAppBar>
    </>
  );
};

export default ProfileBlock;
