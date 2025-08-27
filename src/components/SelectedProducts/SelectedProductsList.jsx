import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import SectionHolder from '../SectionHolder.jsx';
import SearchBox from '../SearchBox.jsx';
import ProductListContent from '../Products/ProductListContent.jsx';

export default function SelectedProducts({ selected, onRemove }) {
  const [search, setSearch] = useState('');

  const filtered = selected.filter((product) =>
    product.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SectionHolder
      icon={<Heart size={20} color="#1976d2" />}
      title="Favourite Products"
      searchBox={
        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="Search favourite..."
        />
      }
    >
      <ProductListContent
        products={filtered}
        onRemove={onRemove}
        mode="selected"
      />
    </SectionHolder>
  );
}
