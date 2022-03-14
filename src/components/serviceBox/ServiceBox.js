import React from "react";
import { Card } from "react-bootstrap";
import "./serviceBox.css"
import { AiOutlineArrowRight } from 'react-icons/ai';
import {Link} from 'react-router-dom'
import { Fade } from "react-reveal";


const ServiceBox = ({image ,title, description }) => {
  return (
    <Fade left>
    <div className=" card m-3 col-sm-5 col-lg-3 " >
      <div className=" m-2 p-4 card-icon">
        <img className="w-100 " src={`images/service${image}.svg`} alt="service" />
      </div>
      
      <Card.Body>
        <Card.Title className="p-2 title">{title}</Card.Title>
        <Card.Text className="p-2">
        {description}
        </Card.Text>
        <Link className="Link" to={{ pathname: `/service-${title}` }}>
        <div className="p-2">
          <span className="px-3 align-items-end">en savoir plus</span>
          <AiOutlineArrowRight />
        </div>
        </Link>
      </Card.Body>
    </div>
    </Fade>
    
  );
};

export default ServiceBox;
