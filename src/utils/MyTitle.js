import React from 'react';

const Title = (props) => {
    const { title } = props;
    return (
        <React.Fragment>
            <h2 style={{
                fontWeight: 'bold',
                fontSize: '30px',
            }}>{title}</h2>
        </React.Fragment>
    )
}

export default Title;
