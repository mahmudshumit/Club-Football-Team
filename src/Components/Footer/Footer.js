import React from 'react';
 import { Button  } from 'react-bootstrap';
 import { Container } from 'react-bootstrap';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFutbol ,faBell,faThumbsUp} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        
           <Container className="text-center">
           
           
          
       
          <a href="https://www.laliga.com/en-GB"> <FontAwesomeIcon icon={faFutbol}/> </a>
          <a href="https://twitter.com/laliga?lang=en"> <FontAwesomeIcon icon={faBell}/> </a>
          <a href="https://www.facebook.com/LaLiga"> <FontAwesomeIcon icon={faThumbsUp}/> </a>
           
       </Container>
    );
};

export default Footer;