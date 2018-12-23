import React from 'react';
import Header from '../components/Layouts/Header';
import Partners from '../components/Partner/Main';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            {props.children}
            <Partners title="Partners" bgColor="#cfd8dd" />
        </React.Fragment>
    )
}

export default Layout;
