import {Switch, Route, BrowserRouter} from 'react-router-dom';
// import { AppRoute, AuthorizationStatus } from '../../const';
import { AppRoute} from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import PublicRoute from '../public-route/public-route';
import Property from '../property/property';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main />
        </Route>
        <PublicRoute exact path={AppRoute.Login}>
          <Login />
        </PublicRoute>
        {/* <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={authorizationStatus}
        >
        </PrivateRoute> */}
        <PrivateRoute exact path={AppRoute.Favorites}>
          <Favorites />
        </PrivateRoute>
        <Route exact path={AppRoute.Offer}>
          <Property />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
