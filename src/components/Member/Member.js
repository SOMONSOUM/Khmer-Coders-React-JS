import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Image/Avatar';

const Member = (props) => {
    const {
        avatar,
        name,
        title,
    } = props.member;
    return (
        <figure>
            <Avatar image={avatar} size='6' />
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
