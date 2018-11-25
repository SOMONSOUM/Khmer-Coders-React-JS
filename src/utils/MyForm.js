import React, { Component } from 'react'

export class MyForm extends Component {
    state = {
        topic: '',
        url: '',
        organizer: '',
        place: '',
        desc: ''
    }
    onTopicChange = e => this.setState({ topic: e.target.value })
    onUrlChange = e => this.setState({ url: e.target.value })
    onOrganizerChange = e => this.setState({ organizer: e.target.value })
    onPlaceChange = e => this.setState({ place: e.target.value })
    onDescChange = e => this.setState({ desc: e.target.value })

    render() {
        const { topic, url, organizer, place, desc } = this.state
        console.log(organizer)
        return (
            <div className='form'>
                <h2 className='form-title'>Add More Events</h2>
                <div className="form-list">
                    <form action="">
                        <div className="form-items">
                            <div className="form-item">
                                <label htmlFor="topic">Topic</label>
                                <input
                                    value={topic}
                                    onChange={this.onTopicChange}
                                    type="text"
                                    name="topic"
                                    className="form-input"
                                    placeholder="Enter your topic"
                                    required autoFocus
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="topic">URL</label>
                                <input
                                    value={url}
                                    onChange={this.onUrlChange}
                                    type="text"
                                    name="url"
                                    className="form-input"
                                    placeholder="Enter your url"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="topic">Organizer</label>
                                <input
                                    value={organizer}
                                    onChange={this.onOrganizerChange}
                                    type="text"
                                    name="organizer"
                                    className="form-input"
                                    placeholder="Enter your organizer"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="topic">Place</label>
                                <input
                                    value={place}
                                    onChange={this.onPlaceChange}
                                    type="text"
                                    name="place"
                                    className="form-input"
                                    placeholder="Enter your place"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="topic">Descriptions</label>
                                <textarea
                                    value={desc}
                                    onChange={this.onDescChange}
                                    type="text"
                                    name="place"
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
    }
}

export default MyForm;
