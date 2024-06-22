import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardImg } from "react-bootstrap";

const Card1 = props => {
    let {imgSrc, price, title} = props.data;
    return (
        <Card className="p-0 overflow-hidden h-100 shadow " >
            <div className='overflow-hidden rounded p-0 bg-light'>
                <Card.Img variant="top" src={imgSrc} />
            </div>
            <Card.Body className="text-center">
                <Card.Title className="display-6" style={{color:"green"}}>{price}</Card.Title>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            {/* <Button className='w-100 rounded' variant='success'>Add To Cart</Button> */}
        </Card>
    )
}

export default Card1;
