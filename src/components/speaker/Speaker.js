import React from 'react';
import PropTypes from 'prop-types';

const Speaker = (props) => {
    const {
        avatar,
        name,
        title,
    } = props.speaker;
    return (
        <React.Fragment>
            <figure>
                <img src={avatar} alt="avatar" />
                <figcaption>
                    <span className="name">{name}</span>
                    <span className="title">{title}</span>
                </figcaption>
            </figure>
        </React.Fragment>
    )
}

Speaker.propTypes = {
    speaker: PropTypes.object.isRequired
}

export default Speaker;
