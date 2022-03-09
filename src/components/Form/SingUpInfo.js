import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const SingUpInfo = ({ formData, setFormData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          fullWidth
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          fullWidth
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id='outlined-basic'
          label='Confirm Password'
          variant='outlined'
          fullWidth
          value={formData.confirmPassword}
          onChange={(event) =>
            setFormData({ ...formData, confirmPassword: event.target.value })
          }
        />
      </Grid>
    </Grid>
  );
};

export default SingUpInfo;
