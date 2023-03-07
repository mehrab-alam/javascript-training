import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Header from './components/Header/Header';
import PricingDetail from './components/PricingDetail/PricingDetail';
import HighlightedPrice from './components/HighlightedPrice/HighlightedPrice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <div className='pricing-container'>
      <div className='pricing-detail-container '> <PricingDetail header="Basic" price="$29" /></div>
      <div className='highlighed-price'><HighlightedPrice header="Professional" price="$49" link="Popular" /></div>
      <div className='pricing-detail-container'><PricingDetail header="Startup" price="$99" /></div>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

