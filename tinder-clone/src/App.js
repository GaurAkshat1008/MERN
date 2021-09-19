import React from 'react';
import Helmet from 'react-helmet'
import './App.css';
import Header from './Header.js'
import TinderCards from './TinderCards.js'
import SwipeButtons from './SwipeButtons.js'

function App() {
  return (
    
    <div className="app">
      <Helmet>
          <title>tinder-clone</title>
          <meta name="description" content="Your description" />
      </Helmet>
        <Header />
        {/* cards */}
        <TinderCards />
        {/* swipes */}
        <SwipeButtons />
    </div>
  );
}

export default App;
