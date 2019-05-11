import React from 'react';
import Provider from '../Provider/Provider';
import Navbar from '../Navbar/Navbar';
import List from '../List/List';

function App() {
  return (
    <div className="App" id="app">
      <Provider>
        <Navbar />
        <List />
      </Provider>
    </div>
  );
}

export default App;
