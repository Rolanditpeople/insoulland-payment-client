import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import MainPage from './mainpage/MainPage';
import c404 from './404/404';
import ScrollToTop from './common/scroll-to-top/ScrollToTop';
import routes from './Routes';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path={routes.mainPage} component={MainPage} exact />
          <Route path="*" component={c404} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Router;
