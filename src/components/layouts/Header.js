import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LanguageIcon from '@material-ui/icons/Language'
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            headerIsSHow: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                this.setState({
                    headerIsSHow: true
                })
            } else {
                this.setState({
                    headerIsSHow: false
                })
            }
        })
    }

    render() {
        return (
            <AppBar position="fixed" style={{
                background: this.state.headerIsSHow ? '#fff' : 'transparent',
                boxShadow: 'none',
                padding: '0',
                margin: '0',
                color: this.state.headerIsSHow ? '#333' : `#fff`,
                textAlign: 'center',
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
                    <IconButton color="inherit">
                        <LanguageIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
