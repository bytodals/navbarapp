import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';
import HamburgerMenu from './components/Hamburger';


function App() {
  return (
    <div className="app-layout">
          <h1 className="logo">logo</h1>
      <HamburgerMenu />
      <Sidebar />
      <Navbar />
      

    <main>
        <Gallery/>
    </main>
    </div>
  );
}

export default App;