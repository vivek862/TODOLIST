import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore, { history } from './store/index'
import App from 'modules/todolist/index'

const store = configureStore({});
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)