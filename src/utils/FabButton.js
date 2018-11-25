import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';

const FabButton = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                padding: '0',
                margin: '0'
            }}>
            <Button
                style={{
                    background: '#2ecc71',
                    borderRadius: '60px',
                    width: '60px',
                    height: '60px'
                }}>
                <AddIcon
                    style={{
                        color: '#fff',
                    }} />
            </Button>
        </div>
    )
}

export default FabButton;
