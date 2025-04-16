import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Empskill() {
  const knowledgeLevels = [
    { value: 'Advanced', label: 'Advanced' },
    { value: 'middle_level', label: 'Middle Level' },
    { value: 'Beginer', label: 'Beginner' },
  ];

  return (
    <div>
      <h4>ABOUT Employee Skill</h4>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          id="proficions"
          select
          label="Proficions"
          variant="outlined"
          fullWidth
        >
          {knowledgeLevels.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TextField id="employee" label="Employee" variant="outlined" fullWidth />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          id="skill_optain"
          label="Skill Obtain"
          variant="outlined"
          fullWidth
        />
      </div>
      <Button variant="contained" style={{ display: 'block' }}>
        Submit
      </Button>
    </div>
  );
}

export default Empskill;
