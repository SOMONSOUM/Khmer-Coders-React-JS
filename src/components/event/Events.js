import React, { Component } from 'react';
import Event from './Event';
import { Consumer } from '../../providers/context'


export class Events extends Component {

    /* DELETE FUNCTION WITH FILTER BY ID */
    deleteEvent = id => {
        const { events } = this.state
        const newEvents = events.filter(event => event.id !== id)
        console.log(`The ${id} was deleted`)

        this.setState({
            events: newEvents,
        })
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const { events } = value
                    return (
                        <React.Fragment>
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
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}


export default Events;
