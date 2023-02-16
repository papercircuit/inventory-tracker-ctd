// The Navbar us Next UI 

import { Navbar } from  "@nextui-org/react";

export default function Nav() {
    return (
        <Navbar css={{
            margin: "1rem",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            fontSize: "1.5rem",
            fontWeight: "600",
            textAlign: "center",
            textTransform: "uppercase",
            lineHeight: "1.5",
            backgroundColor: "white",
            color: "black",
            display: "flex",
            justifyContent: "space-between",
        }}>
            <Navbar.Brand >Inventory App</Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link href="/products">Products</Navbar.Link>
                <Navbar.Link href="/users">Users</Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}

