import React, { useState, useContext } from 'react';
import { Card, Text, Button, Container, Image } from '@nextui-org/react';
import { ProductContext } from '@/components/ProductContext';

// Define the type of props that the component will receive
interface Props {
    product: {
        title: string;
        stock: number;
        images: string[];
    }
}

const Product: React.FC<Props> = ({ product }) => {
    const { products } = useContext(ProductContext);
    const [quantity, setQuantity] = useState(product.stock);
    const [image, setImage] = useState(product.images[0]);
    
    return (
        <>
            {products ? (
                <Card isHoverable variant="bordered" css={{
                    width: "400px",
                    margin: "1rem",
                    padding: "1.5rem",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textTransform: "uppercase",
                    lineHeight: "1.5",
                    backgroundColor: "white",
                    color: "black",
                }}>
                    <Card.Header css={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        textAlign: "center"
                    }}>{product.title}</Card.Header>
                    <Card.Body>
                        <Text
                            css={{
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                textAlign: "center",
                                textTransform: "uppercase",
                                lineHeight: "1.5",
                            }}
                        >Count: {quantity}</Text>
                        <Image src={image} width="100px" height="100px" />
                        <Container>
                            <Button onPress={() => setQuantity(quantity + 1)}>Increase</Button>
                        </Container>

                        <Container>
                            <Button onPress={() => setQuantity(quantity - 1)}>Decrease</Button>
                        </Container>
                    </Card.Body>
                </Card>
            ) : (
                <Text>Loading...</Text>
            )}
        </>
    );
};

export default Product;