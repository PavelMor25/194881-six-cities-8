import {RouteProps} from 'react-router';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';

function PublicRoute({...props}: RouteProps): JSX.Element {
  const authStatus = useSelector((state: State) => state.auth.status);

  return (
    <Route {...props}>
      {authStatus === AuthorizationStatus.NoAuth || authStatus === AuthorizationStatus.Unknown
        ? props.children
        : <Redirect to={AppRoute.Root} />}
    </Route>
  );
}

export default PublicRoute;
