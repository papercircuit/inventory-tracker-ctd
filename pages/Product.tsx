// pages/Product.tsx
import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'
import { Card } from '@nextui-org/react';


// Define the type of props that the component will receive
interface Props {
    name: string;
    count: number;
}


const Product: React.FC<Props> = ({ name, count }) => {
    const [quantity, setQuantity] = useState(count);

    return (
        <>
            <Card css={{ mw: "400px" }}>
                <Card.Header className={styles.productName}>{name}</Card.Header>
                <Card.Body>
                    <p>Count: {quantity}</p>

                    <button onClick={() => setQuantity(quantity + 1)}>Increase</button>

                    <button onClick={() => setQuantity(quantity - 1)}>Decrease</button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Product;
