import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import '../BlogCard/BlogCard.scss';

import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { blogPostAction, increment } from '../actions/blogPostAction';
import Message from '../Message';
import BlogCard from '../BlogCard/BlogCard';
import Loader from '../Loader';

const BlogPosts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(blogPostAction());
  }, [dispatch]);

  const blogPost = useSelector((state) => state.blogPost);
  const { loading, error, blogPostInfo } = blogPost;

  return (
    <React.Fragment>
      <div className='blog-card-wrapper'>
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={2}>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='error'>{error}</Message>
            ) : (
              <>
                {blogPostInfo?.slice(0, 6).map((post, index) => {
                  const { Image, Title, Subtitle, id } = post;
                  return (
                    <Grid item xs={12} md={4} lg={4} key={index}>
                      <Link to={`singleblogpost/${id}`}>
                        <BlogCard
                          Image={Image}
                          Title={Title}
                          Subtitle={Subtitle}
                        />
                      </Link>
                    </Grid>
                  );
                })}
              </>
            )}
          </Grid>
          {blogPost.blogPostInfo ? (
            <div className='load-more'>
              <Button
                variant='outlined'
                onClick={() => navigate('/allblogposts')}
              >
                Load More
              </Button>
            </div>
          ) : (
            ''
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BlogPosts;
