import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import image from '../../Photo/banner (2).jpg'

const Home = () => {
    const [teams, setTeams] = useState([]);


    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
            .then(res => res.json())

            .then((data) => {
                const allTeams = data.teams;
                const teams15 = allTeams.slice(0, 15);
                setTeams(teams15);
            })

    }, [])




    return (

        <div className="container mt-5 ">

            <div class="text-center pt-5 ">
                <h1>Club FootBall Team </h1>
            </div>
            <div class="text-center pt-5 ">
            
              <img src={image} alt=""/>
            </div>
             
                <div className="row">

                    {
                        teams.map(team => <Team team={team}></Team>)
                    }
                </div>
                
            </div>
    );
};

export default Home;