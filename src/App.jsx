import React from 'react';
import Footer from './components/Footer';
import PostList from './components/PostList';
import TagList from './components/TagList';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HamburgerMenu from './components/Hamburger';


function App() {
  return (
    <div className="app-layout">
      <Navbar />
        <HamburgerMenu />
          <h1 className="logo">F25D Borås YH - React kurs</h1>
        <Sidebar />
          <main className="main-section">
    <div className="content-area">
          <PostList />
          <TagList /> 
        </div>
    </main>
      <Footer />
    </div>
  );
}

export default App;