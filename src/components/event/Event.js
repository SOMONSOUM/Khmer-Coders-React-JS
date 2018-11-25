import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

export class Event extends Component {

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }

    render() {
        const {
            link,
            meetup,
            organizer,
            topic,
            date,
        } = this.props.event

        return (
            <li>
                <span className="position">
                    <a href={link}>{`${organizer} ${meetup}`}</a>
                    <IconButton style={{ float: 'right' }} onClick={this.onDeleteClick}>
                        <Icon>delete_icon</Icon>
                    </IconButton>
                    <IconButton style={{ float: 'right' }}>
                        <Icon>edit_icon</Icon>
                    </IconButton>
                    <IconButton style={{ float: 'right' }}>
                        <Icon>remove_red_eye</Icon>
                    </IconButton>
                    <br /><strong>{topic}</strong>
                </span>
                <span className='date'>{date}</span>
            </li>
        )
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}


export default Event;
