import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/home'

class App extends React.Component {
    state = {
    }
    render() {
        return (
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />                
              </Switch>
              
            </Router>
        )
      }
    }
    
    export default App;    