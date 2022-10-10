import { Box, Button, Typography } from '@mui/material';
import React from 'react'

const DeleteBox = ({ handleDelete, setOpenDelete }) => {
    
  return (
    <Box
      width={400}
      height={200}
      bgcolor={"background.default"}
      color={"text.primary"}
      p={3}
      borderRadius="4px"
      gap={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography variant="h6" color="black" textAlign="center" fontWeight={300}>
        Are you sure you want to delete?<br></br>There is no undo.
      </Typography>
      
      <Box display="flex" justifyContent="center" gap={2}>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="contained" onClick={() => setOpenDelete(false)}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default DeleteBox