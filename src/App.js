import React, { useState } from 'react';
import logo from './logo.svg';
import GameLevel from './components/GameLevel';
import './App.css';

import levels from './levelData.json'

function App() {
  const [startMenuOpen, setStartMenuOpen] = useState(true)
  const [levelData, setLevelData] = useState(levels[0])

  const travelToLevel = (id) => {
    console.log("Traveling to level " + id);
    setLevelData(levels.find(level => level.id === id));
  }

  return (
    <div className="App">
      {startMenuOpen ?
        <header className="appHeader">
          <h2>{'React point & click prototyyppi'}</h2>
          <button className='menuButton' onClick={()=>setStartMenuOpen(false)}>Aloita peli</button>
        </header>
        :  
        <div className='gameWrapper'>
          <GameLevel
            levelData={levelData}
            travelToLevel={travelToLevel}
          />
        </div>
    }
    </div>
  );
}

export default App;
