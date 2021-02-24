import React from 'react';
import Nav from './Nav';
import Head from '../pages/head';
import How from '../pages/how';
import Why from '../pages/why';
import Steps from '../pages/steps';

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Head />
      <How />
      <Why />
      <Steps />
    </div>
  );

}

export default App;
