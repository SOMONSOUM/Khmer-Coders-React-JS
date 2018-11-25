import React from 'react';

const Member = (props) => {
    const {
        avatar,
        name,
        title,
    } = props;
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

export default Member;
