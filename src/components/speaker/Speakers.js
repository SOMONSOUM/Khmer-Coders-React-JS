import React, { Component } from 'react';
import Speaker from './Speaker';

export class Speakers extends Component {
    constructor() {
        super()
        this.state = {
            speakers: [
                {
                    id: 1,
                    name: 'Mike Gaertner',
                    title: 'Sabay COO',
                    avatar: 'http://khmercoders.co/images/mike.jpg'
                },
                {
                    id: 2,
                    name: 'Kak Soky',
                    title: 'Research Coordinator at Research and Innovation Center of NIPTICT',
                    avatar: 'http://khmercoders.co/images/soky.png'
                },
                {
                    id: 3,
                    name: 'Ly Vandy',
                    title: 'Deputy Manager, Cyber Security Deloitte Cambodia',
                    avatar: 'http://khmercoders.co/images/vandy.jpg'
                },
                {
                    id: 4,
                    name: 'Ly Channa',
                    title: 'BookMeBus CTO',
                    avatar: 'http://khmercoders.co/images/channa.jpg'
                },
                {
                    id: 5,
                    name: 'Vitou Phy',
                    title: 'mLab Cofounder',
                    avatar: 'http://khmercoders.co/images/vitou.jpg'
                },
                {
                    id: 6,
                    name: 'Heng Kimchheang',
                    title: 'Senior iOS Engineer at Okoone',
                    avatar: 'http://khmercoders.co/images/kimchheang.jpg'
                },
                {
                    id: 7,
                    name: 'Djibou Cisse',
                    title: 'Sousdey Cambodia CEO',
                    avatar: 'http://khmercoders.co/images/djibou.png'
                },
                {
                    id: 8,
                    name: 'Vannak Moremi',
                    title: 'Freelancer',
                    avatar: 'http://khmercoders.co/images/vannak.jpg'
                },
                {
                    id: 9,
                    name: 'Soun Pisey',
                    title: 'DBA at Kosign',
                    avatar: 'http://khmercoders.co/images/pisey.jpg'
                },
                {
                    id: 10,
                    name: 'Vicheka Phor',
                    title: 'Software Engineer at AllWeb',
                    avatar: 'http://khmercoders.co/images/vicheka.png'
                }
            ]
        }
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
