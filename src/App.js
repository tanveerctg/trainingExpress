import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import LandingPage from './Containers/LandingPage/LandingPage';
import Features from './Containers/Features/Features';

function App() {

  return (
    <div className="App" >
      <Layout>
        <LandingPage />
        <Features />
      </Layout>
    </div>
  );
}

export default App;

