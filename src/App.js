import React from 'react';
import './App.css';
import HomePage from '../src/components/pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        {/* <button onClick={() => props.history.push('/topics')}>Click me</button> */}
        {/* <Link to='/topics'>Topics</Link> */}
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;

/*
Any component that gets rendered by the Route gets passed 3 props: 
props = {
  history,
  location,
  match: {
    url,
    path,
    params,
    isExact: true
  }
}
*/

// props.location.pathname is where you are now - the entire URL in the browser
// props.match.url is the url of the rendered component up to ((where it matched))
// props.match.path is the path of the rendered component
// props.match.params.topicId
// These 4 properties are available to the first component
    // that is passed to the Route but that can be solved with withRouter

// allows components to build a nested route structure