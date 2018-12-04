import React from 'react';
import { Link } from "react-router-dom";

const logo = props => {
    const AppName = (
        <div style={{ flexGrow: 1 }}>
            <div className="logo_title"
                style={{
                    fontSize: props.fontSize + 'rem',
                    letterSpacing: props.letterSpacing + 'px',
                    textTransform: props.textTransform,
                }}>
                <strong>{props.first_title}</strong>{props.second_title}
            </div>
            <div
                className="logo_sub_title"
                style={{
                    fontSize: props.subFontSize + 'rem',
                    letterSpacing: props.subLetterSpacing + 'px',
                    textTransform: props.subTextTransform,
                    fontWeight: props.subFontWeight
                }}>
                {props.sub_title}
            </div>
        </div>
    )

    if (props.link) {
        return (
            <Link
                className="link_logo"
                to={props.linkTo}
                style={{
                    textDecoration: 'none',
                    color: 'inherit', display: 'inline-block'
                }}>
                {AppName}
            </Link>
        )
    } else {
        return AppName
    }
}

export default logo;
