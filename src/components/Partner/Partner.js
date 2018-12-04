import React from 'react'
import Avatar from '../Image/Avatar';

const Footer = (props) => {
    const { name, avatar, desc } = props
    return (
        <figure>
            <Avatar image={avatar} size="8" />
            <figcaption>
                <span className="partner-name">{name}</span>
                <span className="partner-desc">{desc}</span>
            </figcaption>
        </figure>
    )
}

export default Footer;
