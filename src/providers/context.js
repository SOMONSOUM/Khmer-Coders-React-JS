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
        speakers: [],
        dispatch: action => this.setState(state =>
            reducer(state, action))
    }

    componentDidMount() {
        this.getEvents();
        this.getSpeakers()
    }

    async getEvents() {
        await axios.get(`http://cd304a1d.ngrok.io/api/events`)
            .then(res => {
                const events = res.data
                this.setState({ events })
            }).catch(err => console.log(err))
    }

    async getSpeakers() {
        await axios.get(`http://cd304a1d.ngrok.io/api/speakers`)
            .then(res => {
                const speakers = res.data
                this.setState({ speakers })
            }).catch(err => console.log(err))
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
