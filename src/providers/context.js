import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_EVENT':
            return {
                ...state,
                events: state.events.filter(event =>
                    event.id !== action.payload),
            }
        case 'ADD_EVENT':
            return {
                ...state,
                events: [action.payload, ...state.events]
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        events: [],
        dispatch: action => this.setState(state =>
            reducer(state, action))
    }
    componentWillMount() {
        axios.get(`http://localhost:3333/api/events`)
            .then(res => {
                const events = res.data
                this.setState({ events })
            })
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
