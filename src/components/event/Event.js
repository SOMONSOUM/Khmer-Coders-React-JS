import React, { Component } from 'react'

export class Event extends Component {
    render() {
        const {
            link,
            meetup,
            organizer,
            topic,
            date,
        } = this.props
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

export default Event;
