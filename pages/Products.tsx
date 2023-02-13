// pages/Products.tsx
import React, { useState } from 'react';
import Product from './Product';
import style from '@/styles/Home.module.css'

const Products: React.FC = () => {
    // Define the type of props that the component will receive and set the initial state
    const [products] = useState([
        { name: 'Bananas', count: 5, imgURL: "https://www.seekpng.com/png/full/24-249030_banana-png-free-commercial-use-images-banana.png" },
        { name: 'Apples', count: 10, imgURL: 'https://www.nicepng.com/png/detail/153-1537482_clip-freeuse-apples-transparent-top-red-apple.png' },
        { name: 'Oranges', count: 7, imgURL: 'https://www.publicdomainpictures.net/pictures/10000/velka/orange-871282749123hSB3.jpg' },
    ]);

    return (
        <>
            <h1 className={style.title}>Products</h1>
        
            {products.map((product) => (
                <Product key={product.name} name={product.name} count={product.count} imgURL={product.imgURL} />
            ))}
        </>
    );
};

export default Products;
