import React from 'react'
import FooterImage1 from '../assets/logo-light.png'
import './style/MainFooter.css';

export default function MainFooter() {
    return (
    <section id="MainFooter">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Enough Talk, Let's Build Something Together</h1>
                </div>
            </div>
            <hr/>    
            <div className="row">
                <div className="col-3">
                    <a href="#"><img src={FooterImage1} className="logo-img" id="FooterImage1" alt=""/></a>
                    <p>Copyright © 2021 Imroz React Template. Built with love in Bangladesh All rights reserved.</p>
                </div>
                <div className="col-9 ">
                    <h1>Contact</h1>
                    <h3>01-899-900-89</h3>
                </div>
            </div>
        </div>
    </section>
    )
}
