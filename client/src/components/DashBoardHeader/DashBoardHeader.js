import { Typography } from '@mui/material';
import React from 'react'
import { DBHBox, Search, SearchIconWrapper, StyledInputBase } from './styles';
import SearchIcon from "@mui/icons-material/Search";

const DashBoardHeader = ({ setSearchValue }) => {

  return (
    <DBHBox>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Your Quizzes
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Search>
    </DBHBox>
  );
}

export default DashBoardHeader