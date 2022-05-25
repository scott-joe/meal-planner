import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store'
import './index.css'
import { Provider } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
