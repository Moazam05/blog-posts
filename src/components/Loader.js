import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Loader.scss';

const Loader = () => {
  return (
    <div className='main-loader-wrapper'>
      <CircularProgress />
    </div>
  );
};

export default Loader;
