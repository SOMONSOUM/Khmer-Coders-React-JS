import React, { Component } from 'react';
import Speaker from './Speaker';
import axios from 'axios';

export class Speakers extends Component {

    state = {
        speakers: []
    }

    componentWillMount() {
        axios.get(`http://localhost:3333/api/speakers`)
            .then(res => {
                const speakers = res.data
                console.log(speakers)
                this.setState({ speakers })
            })
    }

    render() {
        const { speakers } = this.state;
        return (
            <div className="members">
                {speakers.map(speaker => (
                    <Speaker
                        key={speaker.id}
                        speaker={speaker} />
                ))}
            </div>
        )
    }
}

export default Speakers;
