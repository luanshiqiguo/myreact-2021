import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HaveOpen from './pages/HaveOpen'
import NotOpen from './pages/NotOpen'

import './App.less'

export const routePaths = {
  INDEX: '/index',
  HAVEOPEN: '/haveopen'
}

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={NotOpen} />
        <Route path={routePaths.HAVEOPEN} component={HaveOpen} />
        <Route path={routePaths.NOTOPEN} component={NotOpen} />
      </Switch>
    </div>
  )
}

export default App
