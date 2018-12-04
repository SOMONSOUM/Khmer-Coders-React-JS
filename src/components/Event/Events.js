import React, { Component } from 'react';
import Event from './Event';
import Loader from '../Loader/Loader';
import { Consumer } from '../../providers/context';

export class Events extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { events } = value
                    if (events === undefined || events.length === 0) {
                        return (
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Loader />
                            </div>
                        )
                    } else {
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
                    }
                }}
            </Consumer>
        )
    }
}


export default Events;
