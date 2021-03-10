import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import male from '../../Photo/male.png';


const TeamDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [])



    return (
        //     <div className="col-md-6 my-6 pt-5">

        //     <Card>
        //     <Card.Img variant="top" src={image} />
        //     <Card.Body>
        //       <Card.Title>{teamId}</Card.Title>
        //       {/* <Card.Title>{population}</Card.Title>
        //       <Card.Title>{region}</Card.Title> */}

        //     </Card.Body>


        //   </Card>
        //     </div>

        <div className="container my-5 pt-5">
            <div className="row">
                <div className="col-md-7">
                    <img className="img-fluid" src={male} alt="" />
                </div>
                {
                    // <div className="col-md-3">
                    //     {gender && gender=== "male" ? (
                    //         <img className="img"src={female} alt=""/>

                    //     ) :(
                    //         <img className="img"src={male} alt=""/> 
                    //     )}
                    // </div>
                }
                <div className="col-md-5">

                    <p>  <img src={team.strTeamBadge} alt="" /> </p>
                    <h3>Country :{team.strCountry}</h3>

                    <h3>Sport Type :{team.strSport}</h3>
                    <h3>Description  : {team.strDescriptionEN}</h3>
                    <h3>Gender : {team.strGender}</h3>

                </div>
            </div>
        </div>
    );
};

export default TeamDetail;