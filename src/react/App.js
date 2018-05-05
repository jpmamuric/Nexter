import React, { Component } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Realtors from './components/Realtors';
import Features from './components/Features';
import Pictures from './components/Review/Pictures';
import Content from './components/Review/Content';
import Homes from './components/Homes';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <Pictures />
        <Content />
        <Homes />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
