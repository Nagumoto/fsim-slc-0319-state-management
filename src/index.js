import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import diceBagApp from './store/reducers'
import App from './components/App'
import './index.css'

const store = createStore(diceBagApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

