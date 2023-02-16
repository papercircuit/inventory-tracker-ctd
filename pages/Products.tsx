import React, { useState } from 'react';
import Product from './Product';
import style from '@/styles/Products.module.css'
import { ProductContext } from '@/components/ProductContext';

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
        <select id="sort-select" value={sortOption} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="count">Stock Count</option>
          <option value="title">Title</option>
        </select>
      </div>
      {sortedProducts.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
