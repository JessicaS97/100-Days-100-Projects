import React from 'react';
import './App.css';

function App() {
  return (
    <div className="game-grid">
      <div className="snake" style={{top: 0, left:0}}></div>
      <div className="snake" style={{top: 0, left:'3%'}}></div>
      <div className="snake" style={{top: 0, left:'6%'}}></div>
    </div>
  );
}

export default App;
