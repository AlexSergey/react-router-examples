import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { RootPage } from './pages/root.page';
import { HomePage } from './pages/home.page';
import { Provider } from 'react-redux';
import { store } from './store';
import { SecureDataPage } from './pages/secure-data.page';
import { ProtectedRouteComponent } from './components/protected-route.component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route path="/" index element={<HomePage />} />
        <Route path="/secure_data" index element={(
          <ProtectedRouteComponent>
            <SecureDataPage />
          </ProtectedRouteComponent>
        )} />
    </Route>
  )
);

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
