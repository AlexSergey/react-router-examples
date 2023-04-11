import { useUser } from '../store/slices/user-slice';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

export const ProtectedRouteComponent = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { pathname } = useLocation();
  const [isAuthorized] = useUser();
  return isAuthorized ? children : <Navigate to={'/'} state={pathname} />;
}
