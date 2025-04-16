import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function SkillsForm() {
  const skillLocations = [
    { value: 'remote', label: 'Remote' },
    { value: 'onsite', label: 'Onsite' },
    { value: 'hybrid', label: 'Hybrid' },
  ];

  return (
    <div>
      <h4>ABOUT Skills</h4>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          id="name_of_skill"
          label="Name of Skill"
          variant="outlined"
          fullWidth
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          id="descriptions"
          label="Descriptions"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          id="department"
          label="Department(s)"
          variant="outlined"
          fullWidth
          placeholder="Enter Department IDs separated by commas"
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          id="location_of_skill_get"
          select
          label="Location_where_get this Skill"
          variant="outlined"
          fullWidth
        >
          {skillLocations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button variant="contained" style={{ display: 'block' }}>
        Submit
      </Button>
    </div>
  );
}

export default SkillsForm;
