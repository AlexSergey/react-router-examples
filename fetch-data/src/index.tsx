import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Routes,
  Route,
  Link,
  Outlet,
  LoaderFunctionArgs,
  defer,
  useLoaderData,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Await,
} from 'react-router-dom';

const Home = () => (
  <div>
    <h1>This is home page</h1>
  </div>
)

const Root = () => (
  <div>
    <Navigation />
    <hr />
    <Outlet />
  </div>
);

const Data = () => {
  const { userData, followersPromise } = useLoaderData() as { userData: any, followersPromise: Promise<any>};

  return (
    <div>
      <div>
        <a href={userData.url} target="_blank">
          <img src={userData.avatar_url} width={100} height={100} alt="" />
        </a>
      </div>
      <h2>Followers:</h2>
      <Suspense
        fallback={<p>Loading data...</p>}
      >
        <Await
          resolve={followersPromise}

          errorElement={
            <p>Error loading data</p>
          }
        >
          {(followers) => {
            return (
              <ul>
                {followers.map((follower: any) => (
                  <li key={follower.id}><strong>{follower.login}</strong></li>
                ))}
              </ul>
            )
          }}
        </Await>
      </Suspense>
    </div>
  )
};

const getData = async () => {
  const res = await fetch('https://api.github.com/users/alexsergey');
  return res.json();
}

const getFollowers = async (followersUrl: string) => {
  const res = await fetch(followersUrl);
  return res.json();
}

const loadData = async ({ request, params }: LoaderFunctionArgs) => {
  const userData = await getData();
  const followersPromise = getFollowers(userData.followers_url);
  return defer({
    userData,
    followersPromise,
  })
};

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/data">Data</Link>
    </li>
  </ul>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" index element={<Home />} />
      <Route path="data" element={<Data />} loader={loadData} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

const container = document.getElementById('root');

const root = createRoot(container as HTMLElement);

root.render(<App />);
