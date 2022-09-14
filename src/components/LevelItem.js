import './LevelItem.css';
import React, { useState } from 'react';

const LevelItem = (props) => {
    const {
        itemData,
        itemImageSource,
        setData,
        type // Valid types: 'travel', 'item' default case is item
    } = props;
    console.log(props);

    const onItemClick = (event) => {
        if (type === 'travel') { 
            setData({ ...itemData });
        } else {
            setData({ infoHeader: itemData.infoHeader, infoTexts: itemData.infoTexts });
        }
    }

    const mouseOver = (event) => {
        /* Various filters for different tints:
        Normal colors:  'sepia(0%) saturate(100%) brightness(100%) hue-rotate(0deg)';
        Yellow: 'sepia(100%) saturate(300%) brightness(100%) hue-rotate(0deg)';
        White/greyscale: 'sepia(100%) saturate(0%) brightness(100%) hue-rotate(0deg)'
        */
        if (itemImageSource) {
            // For separate images use filter to tint image to desired color, colored pixels in image are tinted
            event.target.style.filter = 'sepia(100%) saturate(0%) brightness(100%) hue-rotate(0deg)';
        } else {
            // For area highlights use background color, colored rectangle
            event.target.style.background = 'rgba(255, 255, 255, 0.4)';
        }
    }
    const mouseOut = (event) => {
        if (itemImageSource) {
            event.target.style.filter = 'sepia(0%) saturate(100%) brightness(100%) hue-rotate(0deg)';
        } else {
            event.target.style.background = 'rgba(0, 0, 0, 0)';
        }
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
            <img className='itemImage' src={itemImageSource} alt={itemData?.name}
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