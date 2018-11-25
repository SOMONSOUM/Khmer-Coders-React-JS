import React, { Component } from 'react';
import Event from './Event';

export class Events extends Component {
    constructor() {
        super()
        this.state = {
            events: [
                {
                    id: 1,
                    link: '#',
                    organizer: 'Facebook Developer Circle Phnom Penh Meetup',
                    topic: 'Introduction to React Native',
                    date: '29th September 2018 at University of Puthisastra',
                    meetup: 2
                },
                {
                    id: 2,
                    link: '#',
                    organizer: 'Facebook Developer Circle Phnom Penh Meetup',
                    topic: 'Messenger Bot 101',
                    date: '7th July 2018 at Emerald Hub',
                    meetup: 1
                },
                {
                    id: 3,
                    link: '#',
                    organizer: 'Khmer Coders Convention',
                    topic: '',
                    date: '9th September 2017 at Zaman University',
                    meetup: 2,
                },
                {
                    id: 4,
                    link: '#',
                    organizer: 'Khmer Coders Convention',
                    topic: '',
                    date: '1st July 2017 at Emerald Hub',
                    meetup: 1,
                }
            ]
        }
    }

    /* DELETE FUNCTION WITH FILTER BY ID */
    deleteEvent = id => {
        const { events } = this.state
        const newEvents = events.filter(event => event.id !== id)
        console.log(`The ${id} was deleted`)

        this.setState({
            events: newEvents,
        })
    }

    render() {
        const { events } = this.state
        return (
            <ul className="events">
                {events.map(event => (
                    <Event
                        key={event.id}
                        event={event}
                        deleteClickHandler={
                            this.deleteEvent.bind(this, event.id)
                        } />
                ))}
            </ul>
        )
    }
}


export default Events;
