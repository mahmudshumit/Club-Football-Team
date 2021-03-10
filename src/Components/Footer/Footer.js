import React from 'react';
 import { Button  } from 'react-bootstrap';
 import { Container } from 'react-bootstrap';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFutbol ,faBell,faThumbsUp} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        
           <Container className="text-center">
           
           
          
       
          <a href=""> <FontAwesomeIcon icon={faFutbol}/> </a>
          <a href=""> <FontAwesomeIcon icon={faBell}/> </a>
          <a href=""> <FontAwesomeIcon icon={faThumbsUp}/> </a>
           
       </Container>
    );
};

export default Footer;