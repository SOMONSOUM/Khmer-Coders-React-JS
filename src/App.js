import React, { Component } from 'react';
import './Resources/css/app.css';
import Header from './components/Layouts/Header';
import MyTitle from './utils/MyTitle';
import Members from './components/Member/Members';
import Banner from './components/Banner/Banner';
import Events from './components/Event/Events';
import Speakers from './components/Speaker/Speakers';
import Partners from './components/Partner/Partners';

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
