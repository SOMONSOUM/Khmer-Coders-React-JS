import React from 'react';
import Title from '../../utils/Title'
import Speakers from './Speakers';

const Main = props => {
    return (
        <div style={{ background: props.bgColor }}>
            <div className="wrap">
                <Title title={props.title} />
                <Speakers />
            </div>
        </div>
    )
}

export default Main;
