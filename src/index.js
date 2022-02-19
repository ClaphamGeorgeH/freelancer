import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MainFooter from './common/MainFooter';
import MainNav from './common/MainNav';
import Service from './components/Service';
import Blocks from './components/Blocks';
import About from './components/About';
import ContractorOrFreelancer from './components/ContractorOrFreelancer';
import News from './components/News';


render(
  <BrowserRouter>
    <MainNav></MainNav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="service" element={<Service/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="blocks" element={<Blocks/>}/>
      <Route path="contractor_or_freelancer" element={<ContractorOrFreelancer/>}/>
      <Route path="news" element={<News/>}/>  
    </Routes>
    <MainFooter></MainFooter>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
