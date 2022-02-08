import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const BlogCardSkelton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant='rectangular' width={360} height={140} />
      <Skeleton variant='text' />
      <Skeleton variant='text' width={360} height={40} />
      <Skeleton variant='text' width={360} height={60} />
    </Stack>
  );
};

export default BlogCardSkelton;
