import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <TextField
          id='outlined-basic'
          label='First Name'
          variant='outlined'
          fullWidth
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id='outlined-basic'
          label='Last Name'
          variant='outlined'
          fullWidth
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id='outlined-basic'
          label='User Name'
          variant='outlined'
          fullWidth
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
