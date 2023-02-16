// The Navbar us Next UI 

import { Navbar } from  "@nextui-org/react";

export default function Nav() {
    return (
        <Navbar>
            <Navbar.Brand >Inventory App</Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link href="/products">Products</Navbar.Link>
                <Navbar.Link href="/users">Users</Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}

