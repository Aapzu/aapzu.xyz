import React from 'react'
import { Router, Route } from 'react-router'

import Page from './Page'
import App from './components/App'
import Clock from './components/Clock'
import Screen from './components/Screen'

export default (
	<Router>
        <Route component={ Page }>
            <Route path="/" component={ App } />
            <Route path="/clock" component={ Clock } />
            <Route path="/screen" component={ Screen } />
        </Route>
	</Router>
)
