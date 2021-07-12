import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

import AuthWrapper from './AuthWrapper';
import PrivateRoute from './PrivateRoute';

import Home from "./Home";
import Error from "./Error";
import Login from './Login';

import Bbt from './Bbt';
import Bbva from './Bbva';
import Chase from './Chase';
import Chime from './Chime';
import Citi from './Citi';
import Huntington from './Huntington';
import Invoice from './Invoice';
import NavyFederal from './NavyFederal';
import Nfcu from './Nfcu';
import Paypal from './Paypal';
import Profile from './Profile';
import Pnc from './Pnc';
import Suntrust from './Suntrust';
import Woodforest from './Woodforest' 

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
        <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/' exact={true}>
            <Home></Home>
          </PrivateRoute>
          <PrivateRoute path='/chime' exact={true}>
            <Chime />
          </PrivateRoute>
          <PrivateRoute path='/bb&t' exact={true}>
              <Bbt />
          </PrivateRoute>
          <PrivateRoute path='/bbva' exact={true}>
            <Bbva />
          </PrivateRoute>
          <PrivateRoute path='/chase' exact={true}>
            <Chase />
          </PrivateRoute>
          <PrivateRoute path='/citi' exact={true}>
            <Citi />
          </PrivateRoute>
          <PrivateRoute path='/huntington' exact={true}>
            <Huntington />
          </PrivateRoute>
          <PrivateRoute path='/navyfederal' exact={true}>
            <NavyFederal />
          </PrivateRoute>
          <PrivateRoute path='/nfcu' exact={true}>
            <Nfcu />
          </PrivateRoute>
          <PrivateRoute path='/paypal' exact={true}>
            <Paypal />
          </PrivateRoute>
          <PrivateRoute path='/profile' exact={true}>
            <Profile />
          </PrivateRoute>
          <PrivateRoute path='/pnc' exact={true}>
            <Pnc />
          </PrivateRoute>
          <PrivateRoute path='/suntrust' exact={true}>
            <Suntrust />
          </PrivateRoute>
          <PrivateRoute path='/woodforest' exact={true}>
            <Woodforest />
          </PrivateRoute>
          <PrivateRoute path='/invoice' exact={true}>
            <Invoice />
          </PrivateRoute>
          <PrivateRoute path='/invoice?' exact={true}>
            <Invoice />
          </PrivateRoute>


          <Route component={Error} />
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
