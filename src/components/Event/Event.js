import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { Consumer } from '../../providers/context';
import moment from 'moment';

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
            id, url, meetup_num, organizer, name, place, event_date
        } = this.props.event

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    const date = moment(event_date).format("MMM Do YYYY")
                    return (
                        <React.Fragment>
                            <li>
                                <span className="position">
                                    <a href={url}>{`${organizer}`}
                                        {(meetup_num == null) ? `` : ` Meetup #${meetup_num}`}
                                    </a>
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
                                    <br /><strong>{name}</strong>
                                </span>
                                <span className='date'>{place} on {`${date}`} </span>
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
