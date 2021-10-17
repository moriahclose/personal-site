import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';

import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default function Routes() {
  return <Router>
    <Layout>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  </Router>
}