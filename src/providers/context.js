import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_EVENT':
            return {
                ...state,
                events: state.events.filter(event =>
                    event.id !== action.payload),
            }

        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
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
        ],
        dispatch: action => this.setState(state =>
            reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
