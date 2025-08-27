import React from 'react';
import { Card, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { Trash2 } from 'lucide-react';

export default function ProductCard({
  product,
  isSelected = false,
  onClick,
  onRemove,
  removable = false,
}) {
  return (
    <Card
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          transform: onClick ? 'scale(1.02)' : 'none',
          borderColor: isSelected ? '#4caf50' : undefined,
        },
        borderRadius: 2,
        border: isSelected ? '2px solid #4caf50' : '1px solid #ddd',
        boxShadow: isSelected ? 3 : '0 1px 2px rgba(0,0,0,0.05)',
        p: 1,
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ width: 80, height: 80, objectFit: 'contain', mr: 2 }}
      />
      <Box flex={1} sx={{ overflow: 'hidden' }}>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: '0.875rem', md: '1rem' },
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          price: {product.price} $
        </Typography>
      </Box>
      {removable && onRemove && (
        <IconButton color="error" onClick={onRemove}>
          <Trash2 size={20} />
        </IconButton>
      )}
    </Card>
  );
}
