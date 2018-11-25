import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Event extends Component {
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
                    <br /><strong>{topic}</strong>
                </span>
                <span className='date'>{date}</span>
            </li>
        )
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
}


export default Event;
