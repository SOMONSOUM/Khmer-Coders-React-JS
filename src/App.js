import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/layouts/Header';
import Title from './utils/Title';
import Members from './components/member/Members';
import Banner from './components/banner/Banner';
import Events from './components/event/Events';
import Speakers from './components/speaker/Speakers';
import Partners from './components/partner/Partners';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <section>
          <div className="wrap">
            <Title title="Speakers" />
            <Speakers />
          </div>
        </section>
        <section style={{ background: '#cfd8dd' }}>
          <div className="wrap">
            <Title title="Events" />
            <Events />
          </div>
        </section>
        <section>
          <div className="wrap">
            <Title title="Team Members" />
            <Members />
          </div>
        </section>
        <section style={{ background: '#cfd8dd' }}>
          <div className="wrap">
            <Title title="Partners" />
            <Partners />
          </div>
        </section>
      </div>
    );
  }
}

export default App;