import React from 'react'
import './App.css';
import './scrollbar.css'
import Layout from './Components/Layout/layout'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Layout/>
          </Route>
          {/* <Redirect path="*" to="/"/> */}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
