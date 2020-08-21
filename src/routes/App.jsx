import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../assets/GlobalStyles';

import { Home } from '../pages/Home';
import { MainDashboard } from '../pages/MainDashboard';
import { AdminDashboard } from '../pages/AdminDashboard';

import { Layout } from '../components/Layout';
import { Login } from '../components/Auth/Login';
import { Register } from '../components/Auth/Register';

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Layout>
        <Route exact path="/dashboard" component={MainDashboard} />
        <Route exact path="/adminDashboard" component={AdminDashboard} />
        <Route exact path="/" component={Home} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
