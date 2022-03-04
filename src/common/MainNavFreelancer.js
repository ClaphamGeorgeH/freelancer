import React, { Component } from 'react';
import './style/MainNav.css';
import NavImage1 from '../assets/logo-all-dark.png';
//import Modal from "react-bootstrap/Modal";
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';
import { Modal, Button} from 'react-bootstrap';


export default class MainNavFreelancer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal : false
        }
    }

    /*
    handleModal(){
        this.setState({
            showModal: !this.state.showModal
        })
    }
    */

    handleClose(){
        this.setState({
            showModal: false
        })
    }

    handleShow(){
        this.setState({
            showModal: true
        })
    }
    
    
    render(){
        return (
            <section id="MainNavbar">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top" id="navbar">
                    <div className="container">
                        <Link className="navbar-brand" to="/freelancer_mode"><img src={NavImage1} className="logo-img"alt=""/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/freelancer_mode" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/freelancer_mode/freelancers">Freelancers</Link>
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
                                <Link id="btnRegistrar" className="btn btn-outline-success" to="/freelancer_mode/registration">Registrarse</Link>
                                <a className="btn btn-outline-success" onClick = {()=>this.handleShow()}>Ingresar</a>
                            </form> 
                        </div>
                    </div>   
                </nav>

                <Modal show = {this.state.showModal}>
                    <Modal.Header>
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
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>
                            Aceptar
                        </Button>
                        <Button onClick={()=>this.handleClose()}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
            )
        }   
}



