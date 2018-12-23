import React from 'react';

import './Circle.css';
import Image from '../Image/Image';

const Circle = (props) => {
    return (
        <button
            className="circle"
            onClick={props.onClick}
            style={{
                width: props.size + 'rem',
                height: props.size + 'rem',
                backgroundColor: props.color
            }}>
            <Image imageUrl={props.image} />
        </button>
    )
}

export default Circle;
