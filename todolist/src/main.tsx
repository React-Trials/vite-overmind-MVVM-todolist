import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'overmind-react'
import { createOvermind } from 'overmind'
import { config } from './overmind'

const overmind = createOvermind(config, {
  devtools: true
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider value={overmind}>
    <App />
  </Provider>
)
