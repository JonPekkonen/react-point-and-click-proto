import './ItemInfoBox.css';
import React, { useEffect, useState } from 'react';

const ItemInfoBox = (props) => {
    console.log(props);
    const { data, closeInfoBox } = props;

    const [isOpen, setIsOpen] = useState(false)

    const onCloseButton = () => {
        setIsOpen(false);
        setTimeout(() => {
            closeInfoBox();
        }, 800);
    }

    useEffect(() => {
        setIsOpen(true)
    }, [])

    return (
        <div className='container' style={{ opacity: isOpen ? 0.9 : 0}}>
            <h3 className='infoHeader'>{data.infoHeader}</h3>
            {data.infoTexts.map((text, index) =>
                <p className='infoTextBlock' key={`info-text-${index}`}>{text}</p>
            )}
            <button className='button' onClick={onCloseButton}>Sulje</button>
        </div>
    );
}

export default ItemInfoBox;