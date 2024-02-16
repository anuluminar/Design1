import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import icon from '../Assets/assets/real-estate-house.png'


function Nav() {
    return (
        <>
            <Navbar className="">
                <Container>
                    <Navbar.Brand href="#home" style={{height: "100px"}}>
                        <img src={icon} alt="" width="100" height="100"
                            className="d-inline-block align-top" />
                    </Navbar.Brand>

                    <Navbar.Collapse className="d-flex align-items-center justify-content-center">
                        <Navbar.Text>

                            <h5>XYZ SYSTEM LLP.</h5>
                        </Navbar.Text>
                    </Navbar.Collapse>

                    {/* <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Dashboard</Nav.Link>
                        <Nav.Link href="#pricing">Products</Nav.Link>
                        <Nav.Link href="#pricing">Transactions</Nav.Link>
                        <Nav.Link href="#pricing">Journal</Nav.Link>
                    </Nav> */}
                </Container> 
                
               

                {/* <Container>
                    
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Dashboard</Nav.Link>
                        <Nav.Link href="#pricing">Products</Nav.Link>
                        <Nav.Link href="#pricing">Transactions</Nav.Link>
                        <Nav.Link href="#pricing">Journal</Nav.Link>
                    </Nav>
                </Container> */}
            </Navbar>

        


            {/* <Navbar>
                <div className='navbar1 d-flex'>
                    <ul className >
                        <li>Home</li>
                        <li>Dashboard</li>
                        <li>products</li>
                        <li>transactions</li>
                        <li>Journal</li>
                    </ul>
                </div>
            </Navbar> */}
        </>
    )
}

export default Nav