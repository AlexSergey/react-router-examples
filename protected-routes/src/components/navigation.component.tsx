import { Link } from 'react-router-dom';
import { useUser } from '../store/slices/user-slice';

export const Navigation = () => {
  const [isAuthorized, login, logout] = useUser();

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/secure_data">secure_data</Link>
      </li>
      <li>
        {isAuthorized ? <button onClick={() => logout()}>logout</button> :
          <button onClick={() => login()}>login</button>}
      </li>
    </ul>
  )
};
