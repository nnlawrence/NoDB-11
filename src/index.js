import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom'
import router from './router'

ReactDOM.render(
<HashRouter>
{router}
<App />
</HashRouter>
, document.getElementById('root'));