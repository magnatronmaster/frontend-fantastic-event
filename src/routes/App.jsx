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

function SecureRoutes({ component, path, ...restElements }) {
  const token = localStorage.token_user;
  const username = localStorage.id_user;
  if (token && username) {
    return <Route path={path} component={component} {...restElements} />;
  } else {
    return <Redirect to="/login" {...restElements} />;
  }
}

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <Layout>
        <SecureRoutes exact path="/dashboard" component={MainDashboard} />
        <SecureRoutes exact path="/adminDashboard" component={AdminDashboard} />
        <SecureRoutes exact path="/editEvent" component={EditEvent} />
        <SecureRoutes exact path="/sponsors" component={Sponsors} />
        <SecureRoutes exact path="/conferences" component={Conferences} />
        <SecureRoutes exact path="/lecturers" component={Lecturers} />
        <SecureRoutes exact path="/addLecturer" component={AddLecturer} />
        <SecureRoutes exact path="/addConference" component={AddConference} />
        <SecureRoutes exact path="/addSponsor/:type" component={AddSponsor} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
<AddSponsor />;
