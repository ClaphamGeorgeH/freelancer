import React, { Component } from 'react'
import banner2 from '../assets/banner/bg-image-31.jpg';
import banner1 from '../assets/banner/bg-image-32.jpg';
import MainFooter from '../common/MainFooter';
import MainNavFreelancer from '../common/MainNavFreelancer';
import './style/News.css';

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    displayNewsBanner(){
        return(
            <div className='row'>
                <div className='col' id='displayNewsBanner'>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={banner1} class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h1>First slide label</h1>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={banner2}  class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h1>First slide label</h1>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={banner1}  class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h1>First slide label</h1>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={banner2}  class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                <h1>First slide label</h1>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={banner1}  class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h1>First slide label</h1>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={banner2}  class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h1>First slide label</h1>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    diplayNewsCards(){
        return(
            <div class="row row-cols-1 row-cols-md-3 g-4" id='diplayNewsCards'>
                <div class="col">
                    <div class="card">
                        <img src={banner1} class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src={banner1} class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src={banner1} class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  
    render() {
        
        let displayNewsBanner = this.displayNewsBanner();
        let diplayNewsCards = this.diplayNewsCards();

        return (
            
            <section id="NewsConstainer">
                <MainNavFreelancer></MainNavFreelancer>
                <div className='container'>
                    <div className='row' id="NewsTittle">
                        <div className='col'>
                            <h1>
                                Noticias
                            </h1>
                        </div>
                    </div>
                    <hr></hr>
                    {displayNewsBanner}
                    <br></br>
                    <hr></hr>
                    {diplayNewsCards}
                    <br></br>
                    <hr></hr>
                    {displayNewsBanner}
                    <br></br>
                    <hr></hr>
                    {diplayNewsCards}
                </div>
                <MainFooter></MainFooter>
            </section>
        )
  }
}
