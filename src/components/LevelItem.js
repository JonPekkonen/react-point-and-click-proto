import './LevelItem.css';
import React, { useState } from 'react';

const LevelItem = (props) => {
    const { itemData, itemImageSource, setItemInfoData } = props;

    const onItemClick = (event) => {
        console.log('Item clicked');
        console.log(event);
        setItemInfoData({ infoHeader: itemData.infoHeader, infoTexts: itemData.infoTexts })
    }

    const mouseOver= (event)=> {
        event.target.style.background = 'rgba(255, 255, 0, 0.5)';
    }
    const mouseOut=(event)=> {
        event.target.style.background = "";
    }

    return (
            <div
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                onClick={onItemClick}
                style={{
                    position: 'absolute',
                    top: itemData.positionY,
                    left: itemData.positionX,
                    width: itemData.sizeX,
                    height: itemData.sizeY,
                    padding: itemImageSource ? 0 : 5,
                }}
            >
            <img className='itemImage' src={itemImageSource} alt={itemData?.itemName}
                style={{
                    width: '100%',
                    height: '100%',
                    padding: 5,
                    visibility: itemImageSource ? 'visible' : 'hidden',
                }}
                />
            </div>
    );
}

export default LevelItem;