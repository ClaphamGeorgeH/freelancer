import React, { Component } from 'react';
import MainNavFreelancer from './common/MainNavFreelancer';
import MainFooter from './common/MainFooter';
import Inicio from './inicio/Inicio';

export default class FreelancerMode extends Component {
  render() {
    return (
      <section>
        <MainNavFreelancer></MainNavFreelancer>
        <Inicio></Inicio>
        <MainFooter></MainFooter>
      </section>
      
    )
  }
}
