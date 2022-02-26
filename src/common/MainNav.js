import React, { Component } from 'react';
import './style/MainNav.css';
import NavImage1 from '../assets/logo-all-dark.png';
//import Modal from "react-bootstrap/Modal";
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';
import { Modal, Button} from 'react-bootstrap';


export default class MainNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal : false
        }
    }

    handleModal(){
        this.setState({
            showModal: !this.state.showModal
        })
    }


    render(){

        return (
            <section id="MainNavbar">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top" id="navbar">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img src={NavImage1} className="logo-img"alt=""/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/service">Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blocks" >Blocks</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/news" >News</Link>
                                </li>
                            </ul>
                            <form className="d-flex" id="SingForm">
                                <Link className="btn btn-outline-success" to="/contractor_or_freelancer">Registrarse</Link>
                                <Button onClick = {()=>this.handleModal()}>Ingresar</Button>
                            </form> 
                        </div>
                    </div>   
                </nav>

                <Modal show = {this.state.showModal}>
                    <Modal.Header closeButton>
                        <h1>Ingreso</h1>
                    </Modal.Header>
                    <Modal.Body>
                        <div id="SignInModalBody">
                            <h5>Nombre de usuario</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <h5>Contraseña</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Pasword" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">Freelancer</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label class="form-check-label" for="inlineRadio2">Administrator</label>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>
                            Aceptar
                        </Button>
                        <Button>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </section>

            
            )
        }   
    
}



