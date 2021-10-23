import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default function Routes() {
  return <Router>
    <Switch>
      <Layout>
        <Route exact path="/" >
          <Redirect to="/about" />
        </Route>
        <Route>
          <About path="/about" />
        </Route>
        <Route path="/experience" >
          <Experience />
        </Route>
        <Route path="/projects" >
          <Projects />
        </Route>
        <Route path="/contact" >
          <Contact />
        </Route>
      </Layout>
    </Switch>
  </Router>
}