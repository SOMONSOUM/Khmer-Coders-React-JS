import React from 'react';
import Header from '../components/Layouts/Header';
import Footer from '../components/Partner/Partner';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default Layout
