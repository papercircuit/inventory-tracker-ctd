// pages/Products.tsx
import React, { useState } from 'react';
import Product from './Product';

const Products: React.FC = () => {
  const [products, setProducts] = useState([
    { name: 'Bananas', count: 5 },
    { name: 'Apples', count: 10 },
    { name: 'Oranges', count: 7 },
  ]);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <Product key={product.name} name={product.name} count={product.count} />
      ))}
    </div>
  );
};

export default Products;
