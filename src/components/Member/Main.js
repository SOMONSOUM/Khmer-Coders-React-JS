import React from 'react';
import Title from '../../utils/Title';
import Members from './Members';

const Main = props => {
    return (
        <div style={{ background: props.bgColor }}>
            <div className="wrap">
                <Title title={props.title} />
                <Members />
            </div>
        </div>
    )
}

export default Main;
