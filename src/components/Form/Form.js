import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

import PersonalInfo from './PersonalInfo';
import SingUpInfo from './SingUpInfo';
import OtherInfo from './OtherInfo';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const Form = () => {
  const [page, setPage] = useState(0);

  const FormTitles = ['Sign Up Info', 'Personal Info', 'Other Info'];

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    username: '',
    nationality: '',
    other: '',
  });

  const pageDisplay = () => {
    if (page === 0) {
      return <SingUpInfo formData={formData} setFormData={setFormData} />;
    }
    if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  console.warn(formData);
  return (
    <Container>
      <h3
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'blue',
        }}
      >
        Multi Step Form
      </h3>
      <h5>{FormTitles[page]}</h5>
      <div style={{ marginBottom: '25px' }}>
        <BorderLinearProgress
          variant='determinate'
          value={page === 0 ? 33 : page === 1 ? 66 : 100}
        />
      </div>
      <div>{pageDisplay()}</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '25px',
        }}
      >
        <Button
          variant='contained'
          disabled={page == 0}
          onClick={() => {
            setPage((curPage) => curPage - 1);
          }}
        >
          Prev
        </Button>
        <Button
          variant='contained'
          color='success'
          //   disabled={page == FormTitles.length - 1}

          onClick={() => {
            if (page == FormTitles.length - 1) {
              alert('Form Submitted');
            } else setPage((curPage) => curPage + 1);
          }}
        >
          {page == FormTitles.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </Container>
  );
};

export default Form;
