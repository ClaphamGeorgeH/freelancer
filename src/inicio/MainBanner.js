import React from 'react';
import banner2 from '../assets/banner/bg-image-31.jpg';
import banner1 from '../assets/banner/bg-image-32.jpg';
import './style/MainBanner.css';

function MainBanner(props) {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner" id="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Business.</h3>
                        <p>Contrary to popular belierf, Lorem Ipsum is no a simply randomm text...</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button className="btn btn-danger me-md-2" type="button">Contact us</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    <h3>Corporate.</h3>
                        <p>There are many variations of passages but the majority have suffered alteration.There are many variations of passages but the majority have suffered alteration.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button className="btn btn-danger me-md-2" type="button">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default MainBanner;