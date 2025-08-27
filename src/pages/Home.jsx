import React, { useState } from 'react';
import { Box } from '@mui/material';
import ProductsList from '../components/Products/ProductsList';
import SelectedProductsList from '../components/SelectedProducts/SelectedProductsList';

export default function Home() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductClick = (product) => {
    if (!selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts((prev) => [...prev, product]);
    }
  };

  const handleRemove = (product) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        p: 2
      }}
    >
      <Box sx={{ flex: 1 , pr: { xs: 4, md: 8 }, pb: { xs: 3 }}}>
        <ProductsList onSelect={handleProductClick} selected={selectedProducts} />
      </Box>
      <Box sx={{ flex: 1, pr: { xs: 4, md: 8 } }}>
        <SelectedProductsList selected={selectedProducts} onRemove={handleRemove} />
      </Box>
    </Box>
  );
}
