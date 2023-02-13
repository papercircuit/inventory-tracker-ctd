// pages/Product.tsx
import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'

// Define the type of props that the component will receive
interface Props {
  name: string;
  count: number;
}


const Product: React.FC<Props> = ({ name, count }) => {
  const [quantity, setQuantity] = useState(count);

  return (
    <div className={styles.product}>
      <h2 className={styles.productName}>{name}</h2>
      <p>Count: {quantity}</p>
    
      <button onClick={() => setQuantity(quantity + 1)}>Increase</button>

      <button onClick={() => setQuantity(quantity - 1)}>Decrease</button>
    </div>
  );
};

export default Product;
