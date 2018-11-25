import React, { Component } from 'react';
import Event from './Event';
import { Consumer } from '../../providers/context';


export class Events extends Component {

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
                                        event={event} />
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
