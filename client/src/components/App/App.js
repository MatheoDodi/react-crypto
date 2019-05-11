import React from 'react';
import { initialState } from '../../store/store';

import Navbar from '../Navbar/Navbar';
import List from '../List/List';

function App() {
  return (
    <div className="App">
      <Navbar />
      <List />
    </div>
  );
}

export default App;
