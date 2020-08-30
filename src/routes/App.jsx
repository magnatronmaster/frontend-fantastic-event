import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../assets/GlobalStyles';

import { Home } from '../pages/Home';
import { MainDashboard } from '../pages/MainDashboard';
import { AdminDashboard } from '../pages/AdminDashboard';
import { AddEvent } from '../pages/AddEvent';
import { AddSponsors } from '../pages/AddSponsors';
import { AddConferences } from '../pages/AddConferences';
import { AddLecturers } from '../pages/AddLecturers';

import { Layout } from '../components/Layout';
import { Login } from '../components/Auth/Login';
import { Register } from '../components/Auth/Register';
 
import {Plantilla} from '../components/plantilla2/App'

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={MainDashboard} />
        <Route exact path="/adminDashboard" component={AdminDashboard} />
        <Route exact path="/addEvent" component={AddEvent} />
        <Route exact path="/addSponsors" component={AddSponsors} />
        <Route exact path="/addConferences" component={AddConferences} />
        <Route exact path="/addLecturers" component={AddLecturers} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
