import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import ReactDOM from 'react-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        
        <hr />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="nested" element={<DashboardNested />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/dashboard/nested">Dashboard Nested</Link>
      <Outlet />
    </div>
  );
}

function DashboardNested() {
  return (
    <div>
      <h2>Nested Dashboard</h2>
      <Outlet />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
