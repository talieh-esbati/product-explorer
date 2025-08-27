import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function SectionHolder({ icon, title, children, searchBox }) {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        p: { xs: 2, md: 3 },
        width: '100%',
        background: 'linear-gradient(135deg, #ffffff, #f9fafb, #f3f4f6)',
        border: '1px solid #e5e7eb',
      }}
    >
      <Box display="flex" alignItems="center" gap={1.5} mb={2}>
        {icon}
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          {title}
        </Typography>
      </Box>

      {searchBox && <Box mb={2}>{searchBox}</Box>}

      {children}
    </Paper>
  );
}
