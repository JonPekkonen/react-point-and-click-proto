import './GameLevel.css';
import React, { useState } from 'react';
import LevelItem from './LevelItem';
import ItemInfoBox from './ItemInfoBox';
import TravelTest from './TravelTest';
const images = require.context('./../assets/', true);

const GameLevel = (props) => {
    const { levelData, travelToLevel } = props;
    console.log(levelData);
    const [itemInfoData, setItemInfoData] = useState(null);
    const [transitionData, setTransitionData] = useState(null);

    const closeOverlay = () => {
        setItemInfoData(null);
        setTransitionData(null);
    }

    return (
        <div className='gameContainer'>
            <img className='backgroundImage' src={images(`./${levelData.backgroundSource}`)} alt='Background' />
            <div className='itemContainer'>
                {levelData.items.map((item) => <LevelItem
                    key={item.name}
                    itemData={item}
                    itemImageSource={item.assetSource ? images(`./${item.assetSource}`) : null}
                    setData={setItemInfoData}
                />)}
                {levelData.transitions.map((item) => <LevelItem
                    key={item.name}
                    itemData={item}
                    type={'travel'}
                    itemImageSource={item.assetSource ? images(`./${item.assetSource}`) : null}
                    setData={setTransitionData}
                />)}
            </div>
            <div className='itemInfoOverlay'>
                {itemInfoData &&
                    <ItemInfoBox
                        data={itemInfoData}
                        closeOverlay={closeOverlay}
                    />
                }
                {transitionData &&
                    <TravelTest
                        data={transitionData}
                        closeOverlay={closeOverlay}
                        travelToLevel={travelToLevel}
                    />
                }

            </div>
        </div>
    );
}

export default GameLevel;