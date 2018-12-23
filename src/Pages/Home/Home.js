import React from 'react';
import Speaker from '../../components/Speaker/Main';
import Banner from '../../components/Banner/Banner';
import Member from '../../components/Member/Main';
import Event from '../../components/Event/Main';

const HomePage = props => {
    return (
        <React.Fragment>
            <Banner />
            <Speaker title="Speakers" />
            <Event title="Events" bgColor="#cfd8dd" />
            <Member title="Team Members" />
        </React.Fragment>
    )
}

export default HomePage;
