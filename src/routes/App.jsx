import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { GlobalStyles } from '../assets/GlobalStyles';

import { Home } from '../pages/Home';
import { MainDashboard } from '../pages/MainDashboard';
import { AdminDashboard } from '../pages/AdminDashboard';
import { EditEvent } from '../pages/EditEvent';
import { Sponsors } from '../pages/Sponsors';
import { Conferences } from '../pages/Conferences';
import { Lecturers } from '../pages/Lecturers';
import { AddConference } from '../pages/AddConference';
import { AddSponsor } from '../pages/AddSponsor';
import { AddLecturer } from '../pages/AddLecturer';

import { Layout } from '../components/Layout';
import { Login } from '../components/Auth/Login';
import { Register } from '../components/Auth/Register';




const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={MainDashboard} />
        <Route exact path="/adminDashboard" component={AdminDashboard} />
        <Route exact path="/editEvent" component={EditEvent} />
        <Route exact path="/sponsors" component={Sponsors} />
        <Route exact path="/conferences" component={Conferences} />
        <Route exact path="/lecturers" component={Lecturers} />
        <Route exact path="/addLecturer" component={AddLecturer} />
        <Route exact path="/addConference" component={AddConference} />
        <Route exact path="/addSponsor" component={AddSponsor} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
<AddSponsor />;
