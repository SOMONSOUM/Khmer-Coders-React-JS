import React from 'react';

import Title from '../../utils/Title';
import Events from './Events';

const Main = props => {
    return (
        <div style={{ background: props.bgColor }}>
            <div className="wrap">
                <Title title={props.title} />
                <Events />
            </div>
        </div>
    )
}

export default Main
