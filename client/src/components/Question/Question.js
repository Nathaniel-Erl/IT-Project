import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";

const Question = ({ question }) => {
  function del() {
    console.log("del");
    document.getElementById("mainCard").style.display = "block";
  }
  function edit() {
    console.log("edit");
  }
  return (
    <Card id="mainCard" sx={{ display: "block", margin: 5 }}>
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon sx={{ color: "orange" }} />}
            />
          </IconButton>
        }
        title="Biology"
        subheader="Question 1 of 12"
      />
      <CardContent>
        <Typography variant="h6" fontWeight={100}>
          {question}
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            padding: 5,
            border: 1,
            borderColor: "grey.500",
            marginTop: 2,
          }}
        >
          <Typography variant="body1" fontWeight={100}>
            The Mitochondria
          </Typography>
        </Paper>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Tooltip title="Edit" placement="top" onClick={edit}>
          <IconButton aria-label="add to favorites">
            <ModeIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete" placement="top" onClick={del}>
          <IconButton aria-label="share">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default Question;
