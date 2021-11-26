import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './App';


ReactDOM.render(
  <React.StrictMode>
    {/* <Desktop>
      <Banner />
    </Desktop>
    <Tablet>
      <Banner />
    </Tablet>
    <Mobile>
      <Banner />
    </Mobile>
    <Default>
      <Banner />
    </Default> */}
    <Banner />
  </React.StrictMode>,
  document.getElementById('root')
);