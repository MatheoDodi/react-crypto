import React from 'react';
import { initialState } from '../../store/store';
import PageContext from '../../store/store';
import Navbar from '../Navbar/Navbar';
import List from '../List/List';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageContext.Provider value={initialState}>
        <List />
      </PageContext.Provider>
    </div>
  );
}

export default App;
