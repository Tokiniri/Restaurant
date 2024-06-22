// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, Button } from "react-bootstrap";

// const Card1 = props => {
//     let { imgSrc, price, title } = props.data;
//     return (
//         <Card className="p-0 overflow-hidden h-100 shadow" style={{ width: '300px', height: 'auto', margin: '10px' }}>
//             <div className='overflow-hidden rounded p-0 bg-light' style={{ width: '300px', height: '150px' }}>
//                 <Card.Img variant="top" src={imgSrc} style={{ width: '300px', height: '150px' }} />
//             </div>
//             <Card.Body className="text-center p-1">
//                 <Card.Title className="display-6 " style={{ color: "green", fontSize: '20px', fontFamily:"-moz-initial" , paddingLeft:"38%", paddingTop:"5%"}}>{price}</Card.Title>
//                 <Card.Title style={{ fontSize: '14px' }}>{title}</Card.Title>
//             </Card.Body>
//             <Button className='w-100 rounded ' variant='red' style={{ fontSize: '14px', color:'blue' }}>Voir tout</Button>
//         </Card>
//     )
// }

// export default Card1;
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const Card1 = props => {
    let { imgSrc, price, title } = props.data;
    return (
        <Card className="p-0 overflow-hidden h-100 shadow" style={{ width: '300px', height: 'auto', margin: '10px', }}>
            <div className='overflow-hidden rounded p-0 bg-light' style={{ width: '300px', height: '150px' }}>
                <Card.Img variant="top" src={imgSrc} style={{ width: '300px', height: '150px',  }} />
            </div>
            <Card.Body className="text-center p-1">
                <Card.Title className="display-6" style={{ color: "green", fontSize: '20px', fontFamily:"-moz-initial" , paddingLeft:"38%", paddingTop:"5%" }}>{price}</Card.Title>
                <Card.Title style={{ fontSize: '14px' }}>{title}</Card.Title>
            </Card.Body>
            <Button className='w-100 rounded' variant='info' style={{ fontSize: '14px', color:'white' }}>Voir tout</Button>
        </Card>
    )
}

export default Card1;



