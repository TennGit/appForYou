import React from 'react'
import { createStore } from 'redux'

import { render } from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store= createStore(rootReducer);

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
