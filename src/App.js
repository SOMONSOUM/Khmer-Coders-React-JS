import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/layouts/Header';
import MyTitle from './utils/MyTitle';
import Members from './components/member/Members';
import Banner from './components/banner/Banner';
import Events from './components/event/Events';
import Speakers from './components/speaker/Speakers';
import Partners from './components/partner/Partners';
// import AddEvent from './components/event/AddEvent'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <React.Fragment>
          <div className="wrap">
            <MyTitle title="Speakers" />
            <Speakers />
          </div>
        </React.Fragment>

        <section
          style={{ background: '#cfd8dd' }}>
          <div className="wrap">
            <MyTitle title="Events" />
            <Events />
            {/* <AddEvent /> */}
          </div>
        </section>

        <section>
          <div className="wrap">
            <MyTitle title="Team Members" />
            <Members />
          </div>
        </section>

        <section
          style={{ background: '#cfd8dd' }}>
          <div className="wrap">
            <MyTitle title="Partners" />
            <Partners />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
