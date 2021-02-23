import React from 'react';
import Nav from './Nav';
import Head from '../pages/head'
import How from '../pages/how'
import Why from '../pages/why'

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Head />
      <How />
      <Why />
    </div>
  );

}

export default App;
