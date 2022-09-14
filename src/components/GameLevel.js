import './GameLevel.css';
import React, { useState } from 'react';
import LevelItem from './LevelItem';
import ItemInfoBox from './ItemInfoBox';
const images = require.context('./../assets/', true);

const GameLevel = (props) => {
    const { levelData, nextRoom } = props;
    console.log(levelData);
    const [itemInfoData, setItemInfoData] = useState({})

    const closeInfoBox = () => {
        setItemInfoData({});
    }

    return (
        <div className='gameContainer'>
            <img className='backgroundImage' src={images(`./${levelData.backgroundSource}`)} alt='Background' />
            <div className='itemContainer'>
                {levelData.items.map((item) => <LevelItem
                    key={item.itemName}
                    itemData={item}
                    itemImageSource={item.assetSource ? images(`./${item.assetSource}`) : null}
                    setItemInfoData={setItemInfoData}
                />)}
            </div>
            {itemInfoData.infoHeader && itemInfoData.infoTexts && 
                <div className='itemInfoOverlay'>
                    <ItemInfoBox
                        data={itemInfoData}
                        closeInfoBox={closeInfoBox}
                    />
                </div>
            }
        </div>
    );
}

export default GameLevel;