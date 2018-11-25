import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LangButton from '../../utils/LangButton';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            headerIsShow: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                this.setState({
                    headerIsShow: true
                })
            } else {
                this.setState({
                    headerIsShow: false
                })
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <AppBar
                    position="fixed"
                    style={{
                        background: this.state.headerIsShow ? '#fff' : 'transparent',
                        boxShadow: 'none',
                        padding: '0',
                        margin: '0',
                        color: this.state.headerIsShow ? '#333' : `#fff`,
                    }}>
                    <Toolbar>
                        <div className="header-logo">
                            <div className="branding">
                                <strong>Khmer</strong>Coders
                            </div>
                            <div className="sub-branding">
                                We are here to share
                            </div>
                        </div>
                        <LangButton />
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

export default Header;
