import "./index.css"

import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App.tsx"

import { Provider } from 'react-redux'
import store from './store/store.ts'


ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
