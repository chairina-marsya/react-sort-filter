/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function FilterInputBase(props) {
  const { doFilterBySearch, doFilterByGender } = props;
  const [age, setAge] = React.useState('');
  const [input, setInput] = React.useState('');

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        boxShadow: 'none',
        mb: '20px',
      }}
    >
      <TextField
        id="search"
        label="Search"
        variant="standard"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div
        style={{ padding: '10px' }}
        aria-label="search"
        role="button"
        onClick={() => doFilterBySearch(input)}
      >
        <SearchIcon />
      </div>
      <FormControl sx={{ ml: 1, flex: 1 }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          sx={{ ml: 1, flex: 1 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="age"
          variant="standard"
          onChange={(e) => {
            const genderVal = e.target.value;
            setAge(genderVal);
            doFilterByGender(genderVal);
          }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
}

FilterInputBase.propTypes = {
  doFilterBySearch: PropTypes.func.isRequired,
  doFilterByGender: PropTypes.func.isRequired,
};
