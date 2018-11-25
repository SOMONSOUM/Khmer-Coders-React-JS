import React from 'react';
import PropTypes from 'prop-types';

const Member = (props) => {
    const {
        avatar,
        name,
        title,
    } = props.member;
    return (
        <figure>
            <img src={avatar} alt="avatar" />
            <figcaption>
                <span className="name">{name}</span>
                <span className="title">{title}</span>
            </figcaption>
        </figure>
    )
}

Member.propTypes = {
    member: PropTypes.object.isRequired
}

export default Member;
