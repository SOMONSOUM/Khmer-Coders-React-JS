import React from 'react';
import Partners from './Partners';
import Title from '../../utils/Title'

const Main = props => {
    return (
        <div style={{ background: props.bgColor }}>
            <div className="wrap">
                <Title title={props.title} />
                <Partners />
            </div>
        </div>
    )
}

export default Main;
