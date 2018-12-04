import React, { Component } from 'react'
import Partner from './Partner';

class Partners extends Component {
    constructor() {
        super()
        this.state = {
            partners: [
                {
                    id: 1,
                    name: 'Royal of University of Phnom Penh',
                    desc: 'The main sponsor',
                    image: 'https://flaglane.com/download/cambodian-flag/cambodian-flag-graphic.png',
                },
                {
                    id: 2,
                    name: 'Insitute of Technology of Cambodia',
                    desc: 'The main sponsor',
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Institute_of_Technology_of_Cambodia_logo.png/230px-Institute_of_Technology_of_Cambodia_logo.png',
                }
            ]
        }
    }
    render() {
        const { partners } = this.state;
        return (
            <div className="partners">
                {partners.map(partner => (
                    <Partner
                        key={partner.id}
                        avatar={partner.image}
                        name={partner.name}
                        desc={partner.desc} />
                ))}
            </div>
        )
    }
}

export default Partners;
