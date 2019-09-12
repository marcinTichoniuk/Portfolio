import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Raster from './components/raster/Raster';
import Home from './page/home/Home';
import Project from './page/project/Project';

// import './sass/main.scss';
import './css/main.css';

function App() {
  return (
    <>
      <Raster />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project/:slug" component={Project} />
      </Switch>
    </>
  );
}

export default App;
