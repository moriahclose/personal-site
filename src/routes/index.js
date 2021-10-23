import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default function Routes() {
  return <Router>
    <Switch>
      <Layout>
        <Route>
          <Home strict exact path="/" />
        </Route>
        <Route strict exact path="/experience">
          <Experience />
        </Route>
        <Route strict exact path="/projects">
          <Projects />
        </Route>
        <Route strict exact path="/contact">
          <Contact />
        </Route>
      </Layout>
    </Switch>
  </Router>
}