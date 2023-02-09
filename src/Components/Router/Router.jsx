import { useRoutes } from 'react-router-dom';

import Login from 'Components/Pages/Login';

function Router() {
  const routes = useRoutes([{ path: '/', element: <Login /> }]);

  return routes;
}

export default Router;
