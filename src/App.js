import React, { useState } from 'react';
import logo from './logo.svg';
import GameLevel from './components/GameLevel';
import './App.css';

import levels from './levelData.json'

function App() {
  const [levelData, setLevelData] = useState(levels[0])

  const nextRoom = () => {
    console.log('TODO: Render next room');
  }
  return (
    <div className="App">
      <header className="appHeader">
        <h2>React point & click prototype</h2>
      </header>
      <div className='gameWrapper'>
        <GameLevel
            levelData={levelData}
            nextRoom={nextRoom}
        />
      </div>
      <div className='footerContainer'>
        <button>Button which does nothing</button>
      </div>
    </div>
  );
}

export default App;
