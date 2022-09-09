import React from 'react'
import { Box, Typography, ButtonGroup, Button } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";

const TypeBox = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width={400}
        height={230}
        bgcolor="#FFFFFF"
        p={3}
        borderRadius={4}
        margin="auto"
      >
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
          <CloseIcon/>
        </Box>

        <Box display="flex" flexDirection="column" gap="1.5rem" style={{ marginBottom: '2rem' }}>
          <Button size="large" variant="contained" fullWidth>
            Short Answer
          </Button>

          <Button size="large" variant="contained" color="error" fullWidth>
            Multiple Choice
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TypeBox