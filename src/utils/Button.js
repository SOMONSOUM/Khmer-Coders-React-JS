import React from 'react';

const MyButton = (props) => {
    const { title, link } = props;
    return (
        <React.Fragment>
            <a
                className='button'
                href={link}
                style={{
                    marginTop: '2rem'
                }}>
                {title}
            </a>
        </React.Fragment>
    )
}

export default MyButton;
