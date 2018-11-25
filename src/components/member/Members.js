import React, { Component } from 'react';
import Member from './Member';

export class Members extends Component {
    constructor() {
        super()
        this.state = {
            members: [
                {
                    id: 1,
                    name: 'Visal In',
                    title: 'KhmerCoders Founder',
                    avatar: 'https://semantic-ui.com/images/avatar2/large/matthew.png'
                },
                {
                    id: 2,
                    name: 'Chhouk Tit Panhara',
                    title: 'Event Organizer',
                    avatar: 'https://semantic-ui.com/images/avatar2/large/elyse.png'
                },
                {
                    id: 3,
                    name: 'Monyrath Buntoun',
                    title: 'Moderator',
                    avatar: 'https://semantic-ui.com/images/avatar2/large/kristy.png'
                },
                {
                    id: 4,
                    name: 'Sokphal Adam',
                    title: 'Moderator',
                    avatar: 'https://semantic-ui.com/images/avatar/large/elliot.jpg'
                },
                {
                    id: 5,
                    name: 'Bun James Ngeth',
                    title: 'Moderator',
                    avatar: 'https://semantic-ui.com/images/avatar/large/steve.jpg'
                }
            ]
        }
    }
    render() {
        const { members } = this.state;
        return (
            <div className="members">
                {members.map(member => (
                    <Member
                        key={member.id}
                        avatar={member.avatar}
                        name={member.name}
                        title={member.title} />
                ))}
            </div>
        )
    }
}

export default Members;
