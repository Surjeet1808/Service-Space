import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import Context from './context/globelcontext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context>
    <App />
    </Context>
)
