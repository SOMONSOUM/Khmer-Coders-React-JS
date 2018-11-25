import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { Consumer } from '../../providers/context';

export class Event extends Component {

    onDeleteClick = (id, dispatch) => {
        dispatch({
            type: 'DELETE_EVENT',
            payload: id
        });
        console.log(`The ${id} was deleted!`)
    }

    render() {
        const {
            id,
            link,
            meetup,
            organizer,
            topic,
            date,
        } = this.props.event

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <React.Fragment>
                            <li>
                                <span className="position">
                                    <a href={link}>{`${organizer} ${meetup}`}</a>
                                    <IconButton style={{ float: 'right' }}
                                        onClick={this.onDeleteClick.bind(this, id, dispatch)}>
                                        <Icon>delete_icon</Icon>
                                    </IconButton>
                                    <IconButton style={{ float: 'right' }}>
                                        <Icon>edit_icon</Icon>
                                    </IconButton>
                                    <IconButton style={{ float: 'right' }}>
                                        <Icon>remove_red_eye</Icon>
                                    </IconButton>
                                    <br /><strong>{topic}</strong>
                                </span>
                                <span className='date'>{date}</span>
                            </li>
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired
}


export default Event;
