import React from 'react';
import Base from './components/Base';
import './App.css';
import 'tachyons';

const App = () => {
  return (
    <Base>
      <div className = 'grow pa3 bg1 ma2 text-center br-pill shadow-3'>
        Contact1
      </div>
      <div className = 'grow pa3 bg1 ma2 text-center br-pill shadow-3'>
        Contact2
      </div>
      <div className = 'grow pa3 bg1 ma2 text-center br-pill shadow-3'>
        Contact3
      </div>
      <div className = 'grow pa3 bg1 ma2 text-center br-pill shadow-3'>
        Contact4
      </div>
    </Base>
  );
}

export default App;
