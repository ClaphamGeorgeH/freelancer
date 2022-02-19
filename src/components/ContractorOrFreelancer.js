import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons';
import FreelancerImg  from '../assets/freelancer.png';
import ContractorImg  from '../assets/contratista.png';
import './style/ContractorOrFreelancer.css';
import { Link } from 'react-router-dom';

export default function ContractorOrFreelancer()  {

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
                        <Link className="card" to="#" style={{ textDecoration: 'none' }}>
                            <img src={FreelancerImg} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h1 className="card-title">Freelancer</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='col-6'>
                        <Link className="card" to="#" style={{ textDecoration: 'none' }}>
                            <img src={ContractorImg} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h1 className="card-title">Contratista</h1>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
            <br />
        </section>
    )
}
