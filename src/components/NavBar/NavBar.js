
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/articles">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/articles/user">New Order</Link>
    </nav>
  );
}