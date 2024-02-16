import React from 'react'
import homeImage from '../Assets/assets/membership.jpg'
import Nav from './Nav'
import { Card } from 'react-bootstrap'
// import ListGroup from 'react-bootstrap/ListGroup';
import image11 from '../Assets/assets/img1.jpg'
import image12 from '../Assets/assets/img2.jpg'
import image13 from '../Assets/assets/img3.jpg'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className='text-center '>
                <a href="#" className='text-decoration-none text-black'>Home</a>
                <a href="" className='text-decoration-none ms-3 text-black'>Dashboard</a>
                <a href="" className='text-decoration-none ms-3 text-black'>Products</a>
                <a href="" className='text-decoration-none ms-3 text-black'>Transactions</a>
                <a href="" className='text-decoration-none ms-3 text-black'>Journal</a>
            </div>
            <div className='container mt-5'>
                <div className="row">
                    <div className='col-lg-4 col-md-4'>
                    <h1 className=''>New arrival</h1>
                    <h6 className='mt-3'><u>join </u>today</h6>
                        <img src={homeImage} alt="" height={"300px"} width={"300px"} />
                        <div className='d-flex align-items-center justify-content-center w-75 mt-3'>
                            <button className='text-center text-primary w-50 border-1' style={{borderRadius: "50px"}}>Join Now</button>
                        </div>
                    </div>

                    <div className='col-lg-8 col-md-8 h-50'>
                    <h1 className='cl text-center'>Unlock Premium Features Now</h1>

                        {/* <h1>Unlock Premium Features Now
                            </h1> */}

                        <div className='mt-4'>
                            <Carousel className=''>
                                <Carousel.Item>
                                    <div className='d-flex'>

                                        <Card style={{ width: '18rem' }} className=''>
                                            <Card.Img variant="top" src={image12} />
                                            <Card.Body>
                                                <Card.Title className='cl'>Lower Interest Rate</Card.Title>
                                            </Card.Body>

                                        </Card>



                                        <Card style={{ width: '18rem' }} className='ms-3'>
                                            <Card.Img variant="top" src={image13} />
                                            <Card.Body>
                                                <Card.Title className='cl'>Interest free payment</Card.Title>
                                            </Card.Body>

                                        </Card>



                                        <Card style={{ width: '18rem' }} className='ms-3'>
                                            <Card.Img variant="top" src={image11} />
                                            <Card.Body>
                                                <Card.Title className='cl'>Discount on materials</Card.Title>
                                            </Card.Body>

                                        </Card>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div className='d-flex align-items-center justify-content-center mt-3'>
                        <button className='btn  border-1 w-50 bg' style={{borderRadius: "50px"}}>Unlock Now</button><br />
                    </div>
                    <div className='d-flex align-items-center justify-content-center mt-3'>
                    <button className='btn  border-1 w-25 bg' style={{borderRadius: "50px"}}>Details</button>
                    </div>
                    </div>
                    <br />
                    
                </div>
            </div>
        </div>

    )
}

export default Home