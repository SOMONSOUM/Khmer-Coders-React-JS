import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class LangButton extends Component {
    state = {
        translateToKhmer: false,
    }
    render() {
        const { translateToKhmer } = this.state;
        return (
            <React.Fragment>
                <Button
                    onClick={() => this.setState({
                        translateToKhmer: !this.state.translateToKhmer
                    })}
                    color="inherit"
                    style={{
                        background: 'transparent',
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                    }}
                    className="lang-btn">
                    {translateToKhmer ? <span>English</span>
                        : <span style={{
                            fontFamily: 'Kantumruy, sans-serif',
                            padding: '0',
                            margin: '0',
                            fontWeight: 'bold',
                        }}>ខ្មែរ</span>}
                </Button>
            </React.Fragment >
        )
    }
}

export default LangButton;
