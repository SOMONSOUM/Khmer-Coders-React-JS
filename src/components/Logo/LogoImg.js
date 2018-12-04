import React from 'react';
import { Link } from 'react-router-dom';
import './LogoImg.css';

const LogoImage = (props) => {
    const template = (
        <div
            className="logo_img"
            style={{
                width: props.width + 'rem',
                height: props.height + 'rem',
                background: `url(${props.imageUrl})no-repeat`
            }}>
        </div>
    )
    if (props.link) {
        return (
            <Link
                to={props.linkTo}
                style={{
                    textDecoration: 'none',
                    color: 'inherit', display: 'inline-block'
                }}>
                {template}
            </Link>
        )
    } else {
        return template;
    }
}

export default LogoImage;
