import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HaveOpen from './pages/HaveOpen'
import NotOpen from './pages/NotOpen'
import MyBlog from './pages/MyBlog'

export const routePaths = {
  INDEX: '/index',
  HAVEOPEN: '/haveopen',
  NOTOPEN: '/notopen',
  MYBLOG: '/myblog'
}

function App() {
  return (
    <Switch>
      <Route path='/' exact component={NotOpen} />
      <Route path={routePaths.HAVEOPEN} component={HaveOpen} />
      <Route path={routePaths.NOTOPEN} component={NotOpen} />
      <Route path={routePaths.MYBLOG} component={MyBlog} />
    </Switch>
  )
}

export default App
