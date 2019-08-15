import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import Directors from './components/Directors';

render (
  <App />,
  document.getElementById('root')
);

// const Actors = () => <div><h1>Actors Page</h1></div>;

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/directors" component={Directors} />
      <Route exact path="/actors" component={Actors} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);