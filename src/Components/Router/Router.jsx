import { useRoutes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useEffect } from 'react';

import Login from 'Components/Pages/Login';
import Registration from 'Components/Pages/Registration';
import TaskManager from 'Components/Pages/TaskManager';
import Loader from 'Components/Forms/Loader';

import { useCheckAuthQuery } from 'redux/queries/auth';
import { setAppInfo } from 'redux/slice/appInfo';
import { selectAppInfo } from 'redux/selectors/selectAppInfo';
import { LOADER_SIZE } from 'Components/Forms/Loader/constants';

function Router() {
  const response = useCheckAuthQuery();
  const dispatch = useDispatch();

  const { isAuth } = useSelector(selectAppInfo);

  useEffect(() => {
    if (response.isSuccess) {
      dispatch(setAppInfo(response.data));
    }
  }, [response.isSuccess]);

  const publicRoutes = useRoutes([
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Registration /> },
    { path: '*', element: <Navigate to="/login" replace /> },
  ]);

  const privateRoutes = useRoutes([
    { path: '/taskmanager', element: <TaskManager /> },
    { path: '*', element: <Navigate to="/taskmanager" replace /> },
  ]);

  const router = isAuth ? privateRoutes : publicRoutes;

  return response.isLoading ? <Loader size={LOADER_SIZE.LARGE} /> : router;
}

export default memo(Router);
