import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';

function PrivateRoute({...props}: RouteProps): JSX.Element {
  const authStatus = useSelector((state: State) => state.auth.status);

  return (
    <Route {...props}>
      {authStatus === AuthorizationStatus.Auth ? props.children : <Redirect to={AppRoute.Login} />}
    </Route>
  );
}

export default PrivateRoute;
