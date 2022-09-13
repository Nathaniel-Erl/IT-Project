import React, {useState} from 'react'
import { Form, QFBox } from './styles';
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material';
import FileBase from "react-file-base64";
import AddIcon from "@mui/icons-material/Add";

const QuizForm = () => {
  const [file, setFile] = useState('')
  return (
    <QFBox>
      <Form>
        <IconButton sx={{ marginLeft: "auto" }}>
          <CloseIcon />
        </IconButton>

        <Box display="flex" justifyContent="space-between">
          <Paper
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              border: 1,
              borderColor: "grey.500",
              flexGrow: 1,
            }}
          >
            <Typography fontWeight={200} marginBottom={2}>
              Upload an image or use default image
            </Typography>

            <IconButton size="large" sx={{ position: "relative" }}>
              <AddIcon
                fontSize="large"
                sx={{ position: "absolute", zIndex: 1 }}
              />
              <Button
                sx={{ opacity: 0, position: "absolute", zIndex: 2, left: -10 }}
              >
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setFile(base64)}
                />
              </Button>
            </IconButton>
          </Paper>
        </Box>

        {file && (
          <img
            src={`${file}`}
            alt="upload"
            style={{ width: "100%", height: "auto" }}
          ></img>
        )}

        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          autoComplete="off"
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          autoComplete="off"
        />

        <Button
          variant="contained"
          color="error"
          style={{ marginLeft: "auto", padding: "0.5rem 5rem" }}
        >
          Submit
        </Button>
      </Form>
    </QFBox>
  );
}

export default QuizForm