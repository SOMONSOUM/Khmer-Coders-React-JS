import React from 'react';

const MyButton = (props) => {
    const { title, link } = props;
    return (
        <div className="myButton" style={{ margin: '0', padding: '0' }}>
            <a className='button' href={link} style={{ marginTop: '2rem' }}>{title}</a>
        </div>
    )
}

export default MyButton;
