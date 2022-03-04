import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import FreelancerMode from './FreelancerMode';
import Freelancers from './components/Freelancers';
import FreelancerRegistration from './components/FreelancerRegistration';
import News from './components/News.js';



render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FreelancerMode/>}/>
        <Route path='freelancers' element={<Freelancers></Freelancers>}/>
        <Route path='registration' element={<FreelancerRegistration/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='registration' element={<FreelancerRegistration/>}/>
      </Routes>
    </BrowserRouter>,   
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
