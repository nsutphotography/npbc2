import React from 'react';
import { Box, Card, CardContent, Typography, Stack } from '@mui/material';
import './BlogList.css'; // Import your CSS file

// Dummy data for blogs
const blogs = [
  { title: 'Blog 1', description: 'This is the first blog description.' },
  { title: 'Blog 2', description: 'This is the second blog description.' },
  { title: 'Blog 3', description: 'This is the third blog description.' },
  { title: 'Blog 4', description: 'This is the fourth blog description.' },
  { title: 'Blog 5', description: 'This is the fifth blog description.' },
  { title: 'Blog 6', description: 'This is the sixth blog description.' },
];

const BlogList = () => {
  return (
    <Box className="blog-list-container">
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {blogs.map((blog, index) => (
          <Card key={index} className="blog-card">
            <CardContent>
              <Typography variant="h5">{blog.title}</Typography>
              <Typography variant="body2">
                {blog.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default BlogList;
