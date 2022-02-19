import React, { Component } from 'react';
import photo1 from "../assets/brands/brand-01.png";
import photo2 from "../assets/brands/brand-02.png";
import photo3 from "../assets/brands/brand-03.png";
import photo4 from "../assets/brands/brand-04.png";
import photo5 from "../assets/brands/brand-05.png";
import photo6 from "../assets/brands/brand-06.png";
import photo7 from "../assets/brands/brand-07.png";
import photo8 from "../assets/brands/brand-08.png";
import photo9 from "../assets/brands/brand-09.png";
import './style/Brands.css';

export default class Brands extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Brand : [
                {id: 1,photo:photo1},
                {id: 2,photo:photo2},
                {id: 3,photo:photo3},
                {id: 4,photo:photo4},
                {id: 5,photo:photo5},
                {id: 6,photo:photo6},
                {id: 7,photo:photo7},
                {id: 8,photo:photo8},
                {id: 9,photo:photo9}
            ]
        }
    }

    componentDidMount() {

    }

    
    


    render() {
        
        return (
            <section id="Brands">
                <div className = "container">
                    <div className = "row">
                        <div className="row" id="text1">
                            <div className="col" >
                                <p>Top clients</p>
                            </div>
                        </div>
                        <div className="row" id="text2">
                            <div className="col">
                                <p>We worked with brands.</p>
                            </div>
                        </div>
                    </div>
            <br/><br/>
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {this.state.Brand.map(itemBrands => 
                            <div key={itemBrands.id} className="col" id="brand" >
                               <div>
                                    <a href="#"><img src={itemBrands.photo} alt="..."/></a>
                                    <div className="card-img-overlay">
                                    </div>
                                </div> 
                            </div>
                            )}
                    </div>
                </div>
            </section>

        )
    }
}
