import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import Product from './Product';
import style from '@/styles/Products.module.css'
import { ProductContext } from '@/components/ProductContext';
import { Grid } from '@nextui-org/react';

interface Props {
  product: {
    title: string;
    stock: number;
    images: string[];
  }
}

const Products: React.FC = () => {
  const { products } = React.useContext(ProductContext);
  const [sortOption, setSortOption] = useState<string>('default');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  let sortedProducts = products;

  if (sortOption === 'count') {
    sortedProducts = [...products].sort((a, b) => b.stock - a.stock);
  } else if (sortOption === 'title') {
    sortedProducts = [...products].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <div className={style.products}>
      <div className={style.sortContainer}>
        <label htmlFor="sort-select">Sort by:</label>
        <select
          id="sort-select"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="default">Default</option>
          <option value="count">Stock Count</option>
          <option value="title">Title</option>
        </select>
      </div>
      <Grid.Container gap={2}>
        {sortedProducts.map((product, index) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={index}>
            <Product key={index} product={product} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default Products;
