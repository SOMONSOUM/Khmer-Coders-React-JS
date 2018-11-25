import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'


const Contact = (props) => {
    const { avatar, name, dob } = props
    return (
        <div className="wrap">
            <a href="#" style={{ textDecoration: 'none' }}>
                <List style={{ border: '5px #880e4f solid' }}>
                    <ListItem >
                        <Avatar>
                            <img
                                src={avatar}
                                style={{ width: '100%', height: '100%' }}
                                alt="avatar" />
                        </Avatar>
                        <ListItemText
                            style={{ color: "#ffffff" }}
                            primary={name}
                            secondary={dob}>
                        </ListItemText>
                    </ListItem>
                    <Typography
                        variant="body1"
                        style={{ padding: '10px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum architecto doloremque sunt nihil sapiente! Assumenda nihil perferendis sed necessitatibus distinctio!
                    </Typography>
                </List>
            </a>
        </div>
    )
}

export default Contact;
