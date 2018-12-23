import React, { Component } from 'react';
import Slide from 'react-reveal';

import Speaker from './Speaker';
import Loader from '../Loader/Loader'
import { Consumer } from '../../providers/context';

export class Speakers extends Component {

    render() {

        return (
            <Consumer>
                {value => {
                    const { speakers } = value
                    if (speakers === undefined || speakers.length === 0) {
                        return (
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Loader />
                            </div>
                        )
                    } else {
                        return (
                            <Slide top>
                                <div className="members">
                                    {speakers.map(speaker => (
                                        <Speaker
                                            key={speaker.id}
                                            speaker={speaker} />
                                    ))}
                                </div>
                            </Slide>
                        )
                    }
                }}
            </Consumer>
        )

    }
}

export default Speakers;
