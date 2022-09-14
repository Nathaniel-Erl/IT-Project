import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import { Form, SABox } from './styles';
import CloseIcon from "@mui/icons-material/Close";

const ShortAnswer = ({ setOpen }) => {

    return (
      <SABox>
        <Form>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="h5"
              color="#666666"
              align="center"
              marginRight="auto"
            >
              Write Question
            </Typography>

            <CloseIcon onClick={() => setOpen(false)} />
          </Box>

          <hr style={{ marginTop: "-3rem" }} />

          <Box display="flex" flexDirection="column" gap="2rem">
            <TextField
              id="outlined-basic"
              label="Question"
              variant="outlined"
              autoComplete="off"
            />
            <TextField
              id="outlined-multiline-static"
              label="Answer"
              multiline
              rows="7"
              variant="outlined"
              autoComplete="off"
            />
          </Box>
          <Button
            variant="contained"
            color="error"
            style={{ marginLeft: "auto", padding: "0.5rem 5rem" }}
          >
            Submit
          </Button>
        </Form>
      </SABox>
    );
}

export default ShortAnswer