import React from 'react';
import { Box, Card, Skeleton } from '@mui/material';

export default function ProductSkeletonList({ count = 5 }) {
  return (
    <Box mt={2} display="flex" flexDirection="column" gap={2}>
      {Array.from({ length: count }).map((_, idx) => (
        <Card
          key={idx}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'grey.200',
            p: 1.5,
          }}
        >
          <Skeleton
            variant="rectangular"
            width={80}
            height={80}
            sx={{ mr: 2, borderRadius: 1 }}
          />
          <Box flex={1}>
            <Skeleton variant="text" width="75%" height={24} />
            <Skeleton variant="text" width="45%" height={18} />
          </Box>
        </Card>
      ))}
    </Box>
  );
}
