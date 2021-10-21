import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HaveOpen from './pages/HaveOpen'
import NotOpen from './pages/NotOpen'

export const routePaths = {
  INDEX: '/index',
  HAVEOPEN: '/haveopen'
}

function App() {
  return (
    <Switch>
      <Route path='/' exact component={NotOpen} />
      <Route path={routePaths.HAVEOPEN} component={HaveOpen} />
      <Route path={routePaths.NOTOPEN} component={NotOpen} />
    </Switch>
  )
}

export default App
