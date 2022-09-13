import './GameLevel.css';
import React, { useState } from 'react';
import LevelItem from './LevelItem';
const images = require.context('./../assets/', true);

const GameLevel = (props) => {
    const { levelData, nextRoom } = props;
    console.log(levelData);
    const [gameSize, setGameSize] = useState({width: 0, height:0})

    return ( 
        <div className='gameContainer'>
            <img className='backgroundImage' src={images(`./${levelData.backgroundSource}`)} alt='Background'/>
            <div className='itemContainer'>
                {levelData.items.map((item) => <LevelItem itemData={item} itemImageSource={item.itemSource ? images(`./${item.itemSource}`) : null} key={item.itemName} />)}
            </div>
        </div>
    );
}

export default GameLevel;