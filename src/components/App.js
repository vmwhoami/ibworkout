import React from 'react';
import Nav from './Nav';
import Head from '../pages/head';
import How from '../pages/how';
import Why from '../pages/why';
import Steps from '../pages/steps';
import Trainer from '../pages/trainer'

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Head />
      <How />
      <Why />
      <Steps />
      <Trainer />
    </div>
  );

}

export default App;
