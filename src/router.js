import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Stats from './components/Stats'

export default (
    <Switch>
        <Route path='/stats' component={Stats} />
    </Switch>
)