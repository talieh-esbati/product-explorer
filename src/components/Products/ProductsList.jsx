import React, { useState } from 'react';
import { useGetProductsQuery } from '../../api/storeApi';
import { Package } from 'lucide-react';
import { SvgIcon } from '@mui/material';
import SectionHolder from '../SectionHolder';
import SearchBox from '../SearchBox';
import ProductListContent from './ProductListContent';

export default function ProductsList({ onSelect, selected }) {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(10);
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  const loadMore = () => setVisibleCount((prev) => prev + 10);

  return (
    <SectionHolder
      icon={<Package size={20} color="#1976d2" />}
      title="Products"
      searchBox={
        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="Search Products..."
        />
      }
    >
      <ProductListContent
        products={filtered}
        isLoading={isLoading}
        error={error}
        visibleCount={visibleCount}
        onLoadMore={loadMore}
        onSelect={onSelect}
        selected={selected}
        mode="list"
      />
    </SectionHolder>
  );
}
