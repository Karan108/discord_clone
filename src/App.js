import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { Counter } from './features/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
