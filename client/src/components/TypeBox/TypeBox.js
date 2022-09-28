import React, {useState} from 'react'
import { Box, Typography, Button, IconButton } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import ShortAnswer from '../ShortAnswer/ShortAnswer';
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import { Container, StyledBox, StyledModal } from './styles';
import { Link } from "react-router-dom";

const TypeBox = () => {
  const [openShortAnswer, setOpenShortAnswer] = useState(false);
  const [openMultipleChoice, setOpenMultipleChoice] = useState(false);
  const quiz = JSON.parse(localStorage.getItem('quiz'))

  return (
    <>
      <Container>
        <StyledBox>
          <Box display="flex">
            <Typography
              style={{ flexGrow: 1, flexBasis: 0 }}
              variant="h4"
              color="black"
              align="center"
              fontWeight={100}
            >
              Question Type
            </Typography>
            <IconButton component={Link} to={`/api/quiz/${quiz._id}`}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap="1.5rem"
            style={{ marginBottom: "2rem" }}
          >
            <Button
              size="large"
              variant="contained"
              fullWidth
              onClick={() => setOpenShortAnswer(true)}
            >
              Short Answer
            </Button>

            <Button
              size="large"
              variant="contained"
              color="error"
              fullWidth
              onClick={() => setOpenMultipleChoice(true)}
            >
              Multiple Choice
            </Button>
          </Box>
        </StyledBox>
      </Container>

      <StyledModal
        open={openShortAnswer}
        onClose={() => setOpenShortAnswer(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ShortAnswer setOpen={setOpenShortAnswer} />
      </StyledModal>

      <StyledModal
        open={openMultipleChoice}
        onClose={() => setOpenMultipleChoice(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MultipleChoice setOpen={setOpenMultipleChoice} />
      </StyledModal>
    </>
  );
}

export default TypeBox