import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Provider from '../Provider/Provider';
import Navbar from '../Navbar/Navbar';
import List from '../List/List';
import Auth from '../Auth/Auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <div className="App" id="app">
              <Provider>
                <Navbar />
                <List />
              </Provider>
            </div>
          )}
        />
        <Route path="/signup" component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
