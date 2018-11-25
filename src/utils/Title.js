import React from 'react';

const Title = (props) => {
    const { title } = props
    return (
        <h2 style={{
            fontWeight: 'bold',
            fontSize: '30px',
        }}>{title}</h2>
    )
}

export default Title;
