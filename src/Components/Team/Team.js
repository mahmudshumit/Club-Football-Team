import React from 'react';
import { Card ,Button } from 'react-bootstrap';

const Team = (props) => {
    const { strCountry,strSport,strTeam} = props.team;

    return (
        <div className="col-md-3 my-3">
            <Card>
               
                <Card.Body>
                   
                    <Card.Title> {strTeam}</Card.Title>
                    <Card.Title> Country :{strCountry}</Card.Title>
                    <Card.Title> Sports Type : {strSport}</Card.Title>
                  
                    <Button variant="primary">Team Detail</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Team;