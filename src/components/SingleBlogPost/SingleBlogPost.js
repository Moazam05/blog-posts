import React, { useEffect, useState } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { blogDetailAction } from '../actions/blogPostAction';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

import './SingleBlogPost.scss';

import Loader from '../Loader';
import Message from '../Message';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  date: {
    color: '#939191',
    marginBottom: '15px !important',
    display: 'flex',
    justifyContent: 'space-between',
  },
  span: {
    marginLeft: '25px',
    color: '#939191',
    display: 'flex',
  },
  paraOne: {
    marginTop: '20px !important',
    color: '#939191',
  },
  vl: {
    borderLeft: '4px solid #1E1B1B',
    height: '80px',
    display: 'flex',
    margin: '25px 0px !important',
  },
  review: {
    marginLeft: '5px',
  },
});

const SingleBlogPost = () => {
  const classes = useStyles();

  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(blogDetailAction(id));
  }, [dispatch, id]);

  const blogDetail = useSelector((state) => state.blogDetail);

  const { loading, error, blogDetailsInfo } = blogDetail;

  const [singleBlog, setSingleBlog] = useState('');

  useEffect(() => {
    setSingleBlog(blogDetail);
  }, [blogDetail]);

  return (
    <React.Fragment>
      <CssBaseline />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Container fixed>
          <Grid container spacing={2}>
            {/* 1st row */}
            <Grid item xs={12} md={2} lg={2}></Grid>
            <Grid item xs={12} md={8} lg={8}>
              <div className='single-post-wrapper'>
                <ThemeProvider theme={theme}>
                  <div variant='body2' className={classes.date}>
                    <div className='eye-icon-posted-date'>
                      Posted on October 6th 2022
                      <div className={classes.span}>
                        <VisibilityIcon />
                        <span className={classes.review}>75 Views</span>
                      </div>
                    </div>
                    <div className='back-to-home'>
                      <Button variant='outlined' onClick={() => navigate('/')}>
                        Back to Home
                      </Button>
                    </div>
                  </div>
                  <Typography variant='h3'>
                    {singleBlog && singleBlog?.blogDetail?.Title}
                  </Typography>

                  <Typography
                    variant='body2'
                    gutterBottom
                    className={classes.paraOne}
                  >
                    {singleBlog && singleBlog?.blogDetail?.Subtitle}
                  </Typography>
                </ThemeProvider>
              </div>
            </Grid>

            <Grid item xs={12} md={2} lg={2}></Grid>
            {/* 2nd row */}
            <Grid item xs={12} md={12} lg={12}>
              <div className='img-container'>
                <img
                  src={singleBlog && singleBlog?.blogDetail?.Image}
                  alt={singleBlog && singleBlog?.blogDetail?.Title}
                  className='container_img'
                />
              </div>
            </Grid>
            {/* 3rd row */}
            <Grid item xs={12} md={2} lg={2}></Grid>
            <Grid item xs={12} md={8} lg={8}>
              <div className='single-post-wrapper'>
                <ThemeProvider theme={theme}>
                  <Typography variant='h3'>
                    {singleBlog && singleBlog?.blogDetail?.Title}
                  </Typography>

                  <Typography
                    variant='body2'
                    gutterBottom
                    className={classes.paraOne}
                  >
                    {singleBlog && singleBlog?.blogDetail?.Subtitle}
                  </Typography>

                  <Typography
                    variant='body2'
                    gutterBottom
                    className={classes.paraOne}
                  >
                    {singleBlog && singleBlog?.blogDetail?.Subtitle}
                  </Typography>
                </ThemeProvider>

                <div className='blog-center-img'>
                  <img
                    src={singleBlog && singleBlog?.blogDetail?.Image}
                    alt=''
                    className={singleBlog && singleBlog?.blogDetail?.Title}
                  />
                </div>

                <Typography variant='h3'>
                  {singleBlog && singleBlog?.blogDetail?.Title}
                </Typography>

                <Typography
                  variant='body2'
                  gutterBottom
                  className={classes.paraOne}
                >
                  {singleBlog && singleBlog?.blogDetail?.Subtitle}
                </Typography>

                <Typography variant='body2' gutterBottom className={classes.vl}>
                  <span className={classes.span}>
                    {singleBlog && singleBlog?.blogDetail?.Subtitle}
                  </span>
                </Typography>

                <Typography
                  variant='body2'
                  gutterBottom
                  className={classes.paraOne}
                >
                  {singleBlog && singleBlog?.blogDetail?.Subtitle}
                </Typography>

                <Typography
                  variant='body2'
                  gutterBottom
                  className={classes.paraOne}
                >
                  {singleBlog && singleBlog?.blogDetail?.Subtitle}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={2} lg={2}></Grid>
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
};

export default SingleBlogPost;
