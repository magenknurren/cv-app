import React from 'react';

import { Switch, Route } from 'react-router-dom';
import ContactFabButton from './components/ContactFabButton';
import NavigationDrawer from './navigation/NavigationDrawer';
import Routes, { IRoute } from './navigation/Routes';

const App: React.FC = () => {

  return (
    <div>
      <NavigationDrawer />
      <Switch>
        {Routes.map((route: IRoute) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
      <ContactFabButton />
    </div>
  );
}

export default App;
