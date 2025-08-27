import React from 'react';
import { Box, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from './ProductCard';
import ProductSkeleton from '../Spinner/ProductSkeleton';

export default function ProductListContent({
  products,
  isLoading = false,
  error,
  visibleCount,
  onLoadMore,
  onSelect,
  onRemove,
  selected = [],
  mode = 'list',
}) {
  if (isLoading) {
    return <ProductSkeleton count={3} />;
  }

  if (error) {
    return (
      <Typography color="error" variant="body2">
        Error getting product
      </Typography>
    );
  }

  if (!products || products.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No favourite product found.
      </Typography>
    );
  }

  const list = products.slice(0, visibleCount || products.length);

  const renderList = (
    <Box display="flex" flexDirection="column" gap={2}>
      {list.map((product) => {
        const isSelected = selected?.some((p) => p.id === product.id);

        return (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={isSelected}
            onClick={mode === 'list' ? () => onSelect?.(product) : undefined}
            onRemove={mode === 'selected' ? () => onRemove?.(product) : undefined}
            removable={mode === 'selected'}
          />
        );
      })}
    </Box>
  );

  return mode === 'list' && onLoadMore ? (
    <InfiniteScroll
      dataLength={list.length}
      next={onLoadMore}
      hasMore={visibleCount < products.length}
      loader={<ProductSkeleton count={3} />}
      style={{ overflow: 'visible' }} 
    >
      {renderList}
    </InfiniteScroll>
  ) : (
    renderList
  );
}
