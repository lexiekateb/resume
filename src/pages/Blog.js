import React from 'react';
import { Box, Typography } from '@mui/material';

const Blog = () => (
  <Box sx={{ padding: '2rem 1rem', maxWidth: 800, margin: '0 auto' }}>
    <Typography variant="h3" gutterBottom>Blog</Typography>
    <Typography variant="body1">
      Welcome to my blog—stay tuned for updates on conferences, publications, and events!
    </Typography>
  </Box>
);

export default Blog;