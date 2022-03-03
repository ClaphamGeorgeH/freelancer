import React, { Component } from 'react'
import FreelancerImg  from '../assets/freelancer.png';
import ContractorImg  from '../assets/contratista.png';
import './style/ContractorOrFreelancer.css';
import { Link } from 'react-router-dom';
import freelancerMode from '../FreelancerMode.js';
import {Card, Button} from 'react-bootstrap';

export default class ContractorOrFreelancer extends Component  {

    render(){
    return(
        <section id="ContractorOrFreelancerPage">
            <div className="container">
                <div className='row'>
                    <div className='col' id="tittle">
                        <p>¿Cual es su perfil?</p>
                    </div>
                </div>

                <div className='row' id="UserType">
                    <div className='col-6'>
                        <Card>
                            <Card.Img variant="top" src={FreelancerImg}/>
                            <Card.Title id="card-body">
                                <Link to='freelancer_mode' className="card-title">Freelancer</Link>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className='col-6'>
                        <Card>
                            <Card.Img variant="top" src={ContractorImg}/>
                            <Card.Title id="card-body">
                                <Link to='freelancer_mode' className="card-title">Contratista</Link>
                            </Card.Title>
                        </Card>
                    </div>
                </div>
            </div>
            <br />
        </section>

    )}
}
