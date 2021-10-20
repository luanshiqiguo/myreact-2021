import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom' // 引入路由模块
import reportWebVitals from './reportWebVitals'
import App from './App'
import 'lib-flexible'

import './index.less'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

reportWebVitals()
