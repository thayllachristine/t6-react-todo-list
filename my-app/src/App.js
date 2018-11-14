import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'


import PageNotFound from './pages/pageNotFound'
import Login from './pages/login'
import SignUp from './pages/signup'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/conta' component={SignUp} />
        <Route component={PageNotFound} />
      </Switch>
    )
  }
}


export default withRouter(App)