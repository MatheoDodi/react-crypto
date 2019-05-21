import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Provider from '../Provider/Provider';
import Navbar from '../Navbar/Navbar';
import List from '../List/List';

function App() {
  return (
    <Router>
      <div className="App" id="app">
        <Provider>
          <Navbar />
          <List />
        </Provider>
      </div>
    </Router>
  );
}

export default App;
