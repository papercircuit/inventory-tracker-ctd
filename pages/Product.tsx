// pages/Product.tsx
import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'
import { Card, Text, Button, Container, Image } from '@nextui-org/react';


// Define the type of props that the component will receive
interface Props {
    name: string;
    count: number;
    imgURL: string;
}


const Product: React.FC<Props> = ({ name, count, imgURL }) => {
    const [quantity, setQuantity] = useState(count);
    const [image, setImage] = useState(imgURL);
 
    return (
        <>
            <Card isHoverable variant="bordered" css={{ 
                mw: "400px", 
                mb: "1rem" ,
                bg: "linear-gradient(19deg, rgba(2,0,100,.3) 0%, rgba(9,9,121,1) 0%, rgba(0,255,255,.6) 100%)",
                color: "white",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                p: "1rem",
                m: "1rem",
                fontSize: "1.5rem",
                fontWeight: "600",
                textAlign: "center",
                textTransform: "uppercase",
                lineHeight: "1.5"
                }}>
                <Card.Header className={styles.productName}>{name}</Card.Header>
                <Card.Body>
                    <Text>Count: {quantity}</Text>
                    <Image src={image} width="100px" height="100px" />
                    <Container>
                        <Button onPress={() => setQuantity(quantity + 1)}>Increase</Button>
                    </Container>

                    <Container>
                        <Button onPress={() => setQuantity(quantity - 1)}>Decrease</Button>
                    </Container>
                </Card.Body>
            </Card>
        </>
    );
};

export default Product;
