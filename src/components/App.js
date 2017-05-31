import React from 'react';

import NavBar from './NavBar';

const App = (props) => {
  return (
    <div>
      <NavBar />
      <div className="app">
          {/* code goes here */}
          {props.children}
      </div>
    </div>
  );
};

export default App
