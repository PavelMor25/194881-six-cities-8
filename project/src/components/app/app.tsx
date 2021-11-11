import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offer';

type Props = {
  offers: Offer[],
}

function App({offers}: Props): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main />
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers.filter((item) => item.isFavorite)} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Offer}
          render={({match}) => Number(match.params.id) <= offers.length
            ? <Property offer={offers[Number(match.params.id)- 1]} offers={offers.filter((item) => item.id !== Number(match.params.id))}/>
            : <NotFoundScreen />}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
