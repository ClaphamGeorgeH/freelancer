import React, { Component } from 'react';
import './style/MainNav.css';
import NavImage1 from '../assets/logo-all-dark.png';
import Modal from "react-bootstrap/Modal";
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';

export default class MainNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
             [isOpen, setIsOpen] : React.useState(false)
        }
    }

    
    logIn(){
        return (
            <Modal show={true}>
              <Modal.Header>Hi</Modal.Header>
              <Modal.Body>asdfasdf</Modal.Body>
              <Modal.Footer>This is the footer</Modal.Footer>
            </Modal>
          );      
    }

    render(){

        let logIn = this.logIn();

        return (
            <section id="MainNavbar">
                {logIn}
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
                            <form class="d-flex" id="SingForm">
                                <Link class="btn btn-outline-success" to="/contractor_or_freelancer">Registrarse</Link>
                                <a class="btn btn-outline-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Ingresar</a>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
            )
        }
}
