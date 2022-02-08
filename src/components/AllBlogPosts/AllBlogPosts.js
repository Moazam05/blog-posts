import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';
import '../BlogCard/BlogCard.scss';

import BlogCard from '../BlogCard/BlogCard';

const AllBlogPosts = () => {
  const blogPost = JSON.parse(localStorage.getItem('blogPostInfo'));
  const navigate = useNavigate();

  const [allBlogPosts, setAllBlogPosts] = useState(blogPost);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className='blog-card-wrapper'>
        <CssBaseline />

        <Container fixed>
          <div className='back-to-home'>
            <Button variant='outlined' onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </div>
          <Grid container spacing={2}>
            {allBlogPosts.map((post, index) => {
              const { Image, Title, Subtitle, id } = post;
              return (
                <>
                  <Grid item xs={12} md={4} lg={4} key={index}>
                    <Link to={`/singleblogpost/${id}`}>
                      <BlogCard
                        Image={Image}
                        Title={Title}
                        Subtitle={Subtitle}
                      />
                    </Link>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AllBlogPosts;
