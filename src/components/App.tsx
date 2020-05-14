import React from 'react'
import store from '../store'
import {Provider} from 'react-redux'
import Routes from './Routes'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {LocalizeProvider} from 'react-localize-redux'
import {Wrap} from './css'


function App() {
    return (
        <Wrap className="container-fluid">
            <LocalizeProvider>
                <Router>
                    <Provider store={store}>
                        <div>
                            <Route path="/maxline" component={Routes}/>
                        </div>
                    </Provider>
                </Router>
            </LocalizeProvider>
        </Wrap>
    );
}

export default App;
