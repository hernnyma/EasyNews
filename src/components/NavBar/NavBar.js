
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './NavBar.css'

export default function NavBar({user, setUser}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <Container className='layout'>
      <Button variant="primary"><Link to="/articles" className='buttonlink'>Articles</Link></Button>
      &nbsp;  &nbsp;
      <Button variant="primary"><Link to="/articles/user" className='buttonlink'>User Articles</Link></Button>
      &nbsp;  &nbsp;
      <Button variant="secondary" ><Link to="" onClick={handleLogOut} className='buttonlink'>Log Out</Link></Button>
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
    </Container>
  );
}