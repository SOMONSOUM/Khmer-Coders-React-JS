import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from './providers/context';

const MyApp = props => {
    return (
        <React.Fragment>
            <Router>
                <App />
            </Router>
        </React.Fragment>
    )
}

ReactDOM.render(
    <Provider>
        <MyApp />
    </Provider>,
    document.getElementById('root')
);
