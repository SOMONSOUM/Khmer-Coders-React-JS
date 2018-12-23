import React from 'react';

import './Button.css';

export const LinkButton = (props) => {
    const { title, link } = props;
    return (
        <React.Fragment>
            <a
                className='button'
                href={link}
                style={{

                }}>
                {title}
            </a>
        </React.Fragment>
    )
}
