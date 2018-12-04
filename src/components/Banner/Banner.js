import React, { Component } from 'react'
import MyButton from '../../utils/MyButton';

export class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className='wrap'>
                    <h3>Cambodian Developers Community</h3>
                    <p>
                        <strong
                            style={{ color: '#3498db' }}>
                            &lt;span&gt;
                        </strong>
                        Join the largest online Cambodian developers community.<br />
                        Run by developers. Loved by developers.
                        <strong
                            style={{ color: '#3498db' }}>
                            &lt;/span&gt;
                        </strong>
                        <span className='cursor'>&nbsp;</span>
                    </p>
                    <MyButton
                        link='#'
                        title='Join KhmerCoders' />
                </div>
            </div>
        )
    }
}

export default Banner;
