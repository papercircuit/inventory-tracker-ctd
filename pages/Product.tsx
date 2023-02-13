// pages/Product.tsx
import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'
import { Card, Text } from '@nextui-org/react';


// Define the type of props that the component will receive
interface Props {
    name: string;
    count: number;
}


const Product: React.FC<Props> = ({ name, count }) => {
    const [quantity, setQuantity] = useState(count);

    return (
        <>
            <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
                <Card.Header className={styles.productName}>{name}</Card.Header>
                <Card.Body>
                    <Text>Count: {quantity}</Text>

                    <button onClick={() => setQuantity(quantity + 1)}>Increase</button>

                    <button onClick={() => setQuantity(quantity - 1)}>Decrease</button>
                </Card.Body>
            </Card>
            <Card.Divider></Card.Divider>
        </>
    );
};

export default Product;
