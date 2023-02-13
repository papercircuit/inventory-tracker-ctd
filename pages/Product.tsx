// pages/Product.tsx
import React, { useState } from 'react';

interface Props {
  name: string;
  count: number;
}

const Product: React.FC<Props> = ({ name, count }) => {
  const [quantity, setQuantity] = useState(count);

  return (
    <div>
      <h2>{name}</h2>
      <p>Count: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>Increase</button>
      <button onClick={() => setQuantity(quantity - 1)}>Decrease</button>
    </div>
  );
};

export default Product;
