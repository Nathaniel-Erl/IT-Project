import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Paper,
  Typography,
  CardMedia,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import {} from "./styles.js";
import logo from "../../images/badge3.png";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const QuizBlock = ({ title, numQuestions, description }) => {
  return (
    <>
      <Card sx={{ margin: 5, width: 427, hight: 432, borderRadius: 5 }}>
        <CardMedia
          // border as i cant render image, placeholder
          sx={{ objectFit: "cover" }}
          component="img"
          height="200"
          image={logo}
          alt="quiz"
        />
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 30,
            margin: 2,
          }}
        >
          {title}
        </Box>
        <div style={{ flexGrow: 1, flexBasis: 0, textAlign: "right" }}>
          <Box
            sx={{
              color: "text.secondary",
              display: "inline",
              fontSize: 20,
              fontWeight: "lighter",
              marginLeft: "auto",
            }}
            // textAlign="right"
          >
            {numQuestions == "1"
              ? `${numQuestions} Question`
              : `${numQuestions} Questions`}
          </Box>
        </div>

        <CardContent>
          <Typography variant="h6" fontWeight={100}>
            What is the power house of the cell ?
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default QuizBlock;
