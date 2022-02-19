import React from 'react';
import './style/Team.css';
import TeamImage1 from '../assets/team/team-01.jpg';
import TeamImage2 from '../assets/team/team-02.jpg';
import TeamImage3 from '../assets/team/team-03.jpg';

export default function Team(props) {
    return (
<section id="Team">
    <div className = "container">
        <div className = "row" id = "text0">
            <div className="row" id="text1">
                <div className="col" >
                    <p>Skilled team</p>
                </div>
            </div>
            <div className="row" id="text2">
                <div className="col">
                    <p>Skilled team</p>
                </div>
            </div>
            <div className="row" id="text3">
                <div className="col">
                    <p>There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.</p>
                </div>
            </div>
        </div>
        <br/><br/>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col" id="card">
            <div className="card">
                <img src={TeamImage1} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                </div>
            </div>
            <br/>
                <p className="titulo-carta"></p>
            </div>
            <div className="col" id="card">
            <div className="card">
                <img src={TeamImage2} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                </div>
            </div>
            <br/>
                <p className="titulo-carta"></p>
            </div>
            <div className="col" id="card">
            <div className="card">
                <img src={TeamImage3} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                </div>
            </div>
            <br/>
                <p className="titulo-carta"></p>
            </div>
        </div>
    </div>
</section>

    )
}
