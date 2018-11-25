import React from 'react'

const Footer = (props) => {
    const { name, avatar, desc } = props
    return (
        <figure>
            <img src={avatar} alt="avatar" />
            <figcaption>
                <span className="partner-name">{name}</span>
                <span className="partner-desc">{desc}</span>
            </figcaption>
        </figure>
    )
}

export default Footer;
