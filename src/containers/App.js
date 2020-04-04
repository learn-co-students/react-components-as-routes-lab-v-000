import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import routes from "../constants/routes";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </div>
    </Router>
  );
};

export default App;
