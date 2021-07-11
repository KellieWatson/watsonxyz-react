import {Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";

function Header(){
return(<div>
    <header>
    <Navbar bg="light" expand="lg">
        <NavbarBrand className="Company-logo" href="#HOME">WatsonXYZ</NavbarBrand>
        <Nav className="Topics">
            <Nav.Link href="#Finance">Finance</Nav.Link>
            <Nav.Link href="#Technology">Technology</Nav.Link>
            <Nav.Link href="#Tools">Tools</Nav.Link>
        <Nav.Link href="#AboutUS">  About Us</Nav.Link>
        </Nav>
    </Navbar>
    </header>
</div>);
}
export default Header;