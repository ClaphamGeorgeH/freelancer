import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import FreelancerMode from './FreelancerMode';
import ContractorOrFreelancer from './components/ContractorOrFreelancer';
import Freelancers from './components/Freelancers';
import About from './components/About';
import FreelancerRegistration from './components/FreelancerRegistration';


render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContractorOrFreelancer/>}/>
        <Route path='freelancer_mode' element={<FreelancerMode/>}/>
        <Route path='freelancer_mode/freelancers' element={<Freelancers></Freelancers>}/>
        <Route path='freelancer_mode/registration' element={<FreelancerRegistration/>}/>
        <Route path='About'element={<About></About>}/>
      </Routes>
    </BrowserRouter>,   
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
