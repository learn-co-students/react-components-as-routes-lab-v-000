import React from 'react';

import NavBar from './NavBar';

const App = (props) => {
  return (
    <div>
    <div className="app">
        <NavBar/>
        {/* code goes here */}
        {props.children}
    </div>
    </div>
  );
};

export default App
