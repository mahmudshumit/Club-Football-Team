import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import male from '../../Photo/male.png';
import female from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faMale, faFutbol, faBell, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';


const TeamDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId])



    return (

        <div className="container my-5 pt-5">
            <div>
                <p>  <img class="mx-auto d-block" src={team.strTeamBanner} alt="" /> </p>
            </div>
            <div>
                <p>  <img class="mx-auto d-block" src={team.strTeamLogo} alt="" /> </p>
            </div>

            <div className="row">
                {

                    team.strGender === 'Male' ? <img className="img-fluid" src={male} alt="" />
                        : <img className="img-fluid" src={female} alt="" />
                }
                <div className="col-sm-6">


                    <h3><FontAwesomeIcon icon={faFlag} />Country Name :{team.strTeam}</h3>
                    <h3><FontAwesomeIcon icon={faFutbol} /> Sport Type :{team.strSport}</h3>
                    <h3><FontAwesomeIcon icon={faMale} />  Gender : {team.strGender}</h3>
                    <p>Description  : {team.strDescriptionEN}</p>



                </div>

                <Container className="text-center">
                    <a href={`https://${team.strFacebook}`}> <FontAwesomeIcon icon={faFutbol} /> </a>
                    <a href={`https://${team.strYoutube}`}> <FontAwesomeIcon icon={faBell} /> </a>
                    <a href={`https://${team.strTwitter}`}> <FontAwesomeIcon icon={faThumbsUp} /> </a>
                </Container>
            </div>
        </div>
    );
};

export default TeamDetail;