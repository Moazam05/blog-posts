import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <TextField
          id='outlined-basic'
          label='Nationality'
          variant='outlined'
          fullWidth
          value={formData.nationality}
          onChange={(e) =>
            setFormData({ ...formData, nationality: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id='outlined-basic'
          label='Others'
          variant='outlined'
          fullWidth
          value={formData.other}
          onChange={(e) => setFormData({ ...formData, other: e.target.value })}
        />
      </Grid>
    </Grid>
  );
};

export default OtherInfo;
