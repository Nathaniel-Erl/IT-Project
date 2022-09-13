import { Button, Checkbox, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react'
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { MCBox, Form } from './styles';

const MultipleChoice = ({ setOpen }) => {
  const [answer, setAnswer] = useState(0)
  const answers = [0, 1, 2, 3, 4, 5, 6]
 
  return (
    <MCBox>
      <Form>
        <Box display="flex">
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

        <Box
          display="flex"
          flexDirection="column"
          gap="2rem"
          flexGrow={1}
          flexBasis={0}
        >
          <TextField id="outlined-basic" label="Question" variant="outlined" />

          <TextField
            id="outlined-select-answer"
            select
            label="Select"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            helperText="Please select number of answers"
          >
            {answers.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>

          <Grid container spacing={2} justify="center">
            {[...Array(answer)].map((ans, id) => {
              return (
                <Grid item key={id} xs={12} sm={6}>
                  <TextField
                    id="outlined-multiline-static"
                    label={`Answer ${id + 1}`}
                    multiline
                    rows="2"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton aria-label="add to favorites">
                            <Checkbox
                              icon={<DoneOutlineIcon />}
                              checkedIcon={
                                <CheckIcon sx={{ color: "green" }} />
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box display="flex" alignItems="center">
          <Typography color="error">
            * Please indicate correct answer(s) by checking box
          </Typography>
          <Button
            variant="contained"
            color="error"
            style={{ marginLeft: "auto", padding: "0.5rem 5rem" }}
          >
            Submit
          </Button>
        </Box>
      </Form>
    </MCBox>
  );
}

export default MultipleChoice