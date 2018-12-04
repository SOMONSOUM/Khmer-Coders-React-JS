import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Circle from '../Button/Circle';
import LogoImage from '../Logo/LogoImg';
import KhmerCoders from '../../Resources/images/manchester_city_logo.png'
import Kh from '../../Resources/images/kh-flag.png'
import En from '../../Resources/images/en-flag.png'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            headerIsShow: false,
            translateToKhmer: true,
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
        const { translateToKhmer } = this.state
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
                    <Toolbar style={{ display: 'flex' }}>
                        <div style={{ flexGrow: 1, padding: '8px 0' }}>
                            <LogoImage
                                link={true}
                                linkTo="/"
                                width="4"
                                height="4"
                                imageUrl={KhmerCoders} />
                        </div>
                        <Circle
                            onClick={() => {
                                this.setState({
                                    translateToKhmer: !this.state.translateToKhmer
                                })
                            }}
                            image={translateToKhmer ? Kh : En}
                            size='2'
                            color='transparent' />
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

export default Header;
