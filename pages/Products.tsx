// pages/Products.tsx
import React, { useState } from 'react';
import Product from './Product';
import style from '@/styles/Products.module.css'
import { ProductContext  } from '@/components/ProductContext';

interface Props {
    product: {
        title: string;
        stock: number;
        images: string[];
    }
}

const Products: React.FC = () => {
   const { products } = React.useContext(ProductContext);

    return (
        <div className={style.products}>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    );
};

export default Products;