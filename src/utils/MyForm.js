import React, { Component } from 'react';
import { Consumer } from '../providers/context';
import uuid from 'uuid';

export class MyForm extends Component {
    state = {
        topic: '',
        url: '',
        organizer: '',
        place: '',
        desc: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { topic, meetup, organizer, url, place, desc } = this.state

        const newEvent = {
            id: uuid(),
            topic: topic,
            meetup: meetup,
            organizer: organizer,
            url: url,
            place: place,
            desc: desc
        }
        dispatch({
            type: 'ADD_EVENT', payload: newEvent
        })
    }

    render() {
        const { topic, meetup, url, organizer, place, desc } = this.state
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='form'>
                            <h2 className='form-title'>Add More Events</h2>
                            <div className="form-list">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-items">
                                        <div className="form-item">
                                            <label htmlFor="topic">Topic</label>
                                            <input
                                                value={topic}
                                                onChange={this.onChange}
                                                type="text"
                                                name="topic"
                                                className="form-input"
                                                placeholder="Enter your topic"
                                                required autoFocus
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="meetup">Meetup</label>
                                            <input
                                                value={meetup}
                                                onChange={this.onChange}
                                                type="text"
                                                name="meetup"
                                                className="form-input"
                                                placeholder="Enter your number of meetup"
                                                required
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="url">URL</label>
                                            <input
                                                value={url}
                                                onChange={this.onChange}
                                                type="text"
                                                name="url"
                                                className="form-input"
                                                placeholder="Enter your url"
                                                required
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="organizer">Organizer</label>
                                            <input
                                                value={organizer}
                                                onChange={this.onChange}
                                                type="text"
                                                name="organizer"
                                                className="form-input"
                                                placeholder="Enter your organizer"
                                                required
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="place">Place</label>
                                            <input
                                                value={place}
                                                onChange={this.onChange}
                                                type="text"
                                                name="place"
                                                className="form-input"
                                                placeholder="Enter your place"
                                                required
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="desc">Descriptions</label>
                                            <textarea
                                                value={desc}
                                                onChange={this.onChange}
                                                type="text"
                                                name="desc"
                                                className="form-input"
                                                placeholder="Enter your Descriptions"
                                            />
                                        </div>
                                        <div className="form-button">
                                            <button type="submit" className="close-button">Close</button>
                                            <button type="submit" className="save-button">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default MyForm;
