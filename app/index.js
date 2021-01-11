import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    browserHistory,
} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import rootSaga from './sagas'

import './styles/main.css'

import App from './components/App'
import Home from './components/Home'

const logger = createLogger({
    // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
    predicate: (getState, action) => action.type !== 'CHANGE_FORM',
})

const sagaMiddleware = createSagaMiddleware()

// Creates the Redux store using our reducer and the logger and saga middlewares
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
// We run the root saga automatically
sagaMiddleware.run(rootSaga)

// Mostly boilerplate, except for the routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
function TweetsFetcher() {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route component={App}>
                    <Route path="/" component={Home} />
                </Route>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<TweetsFetcher />, document.getElementById('app'))
