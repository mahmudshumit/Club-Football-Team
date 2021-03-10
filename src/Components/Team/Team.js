import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const { strCountry, strSport, strTeam, idTeam } = props.team;
    const history = useHistory();
    const handleClick = (teamId) => {
        const url = `/team/${teamId}`;
        history.push(url);

    }
    return (
        <div className="col-md-3 my-3">
            <Card>

                <Card.Body>

                    <Card.Title> {strTeam}</Card.Title>
                    <Card.Title> Country :{strCountry}</Card.Title>
                    <Card.Title> Sports Type : {strSport}</Card.Title>
                    <br />
                    <Button onClick={() => handleClick(idTeam)} variant="primary">Team Detail <FontAwesomeIcon icon={faArrowCircleRight} /> </Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Team;