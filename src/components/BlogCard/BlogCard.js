import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';

const BlogCard = ({ Image, Title, Subtitle }) => {
  const useStyles = makeStyles({
    root: {
      height: 114,
    },
    paragraph: {
      height: 90,
    },
    date: {
      color: '#939191',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Card sx={{ maxWidth: 360 }}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='180'
          image={Image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='body2'
            component='div'
            className={classes.date}
          >
            Posted on October 6th 2022
            <div className='eye-icon'>
              <VisibilityIcon />
              <span>563 View</span>
            </div>
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            className={classes.root}
          >
            {Title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className={classes.paragraph}
          >
            {Subtitle.toString().substring(0, 120)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCard;
