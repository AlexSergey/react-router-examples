import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/navigation.component';

export const RootPage = () => {
  return (
    <div>
      <Navigation />
      <hr />
      <Outlet />
    </div>
  )
}
