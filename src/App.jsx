import { useState } from 'react';
import './App.css';
import ChatApp from './chat/ChatApp';
import Sidebar from './chat/Sidebar.jsx';
import Navbar from './chat/Navbar.jsx';
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
          <ChatApp />
        </div>
      </div>
    </div>

  );
}

export default App;
{/* <Route path='/' >
  <div className="h-screen flex flex-col">
    <Navbar />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <ChatApp />
      </div>
    </div>
  </div>
</Route> */}