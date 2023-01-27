import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './LoginForm.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='form'>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Group className='mb-3' controlId="formBasicEmail">
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder='name@example.com'/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
        <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
          <Form.Control type="password" name="password" value={credentials.password} onChange={handleChange} required placeholder='Password'/>
        </FloatingLabel>
        </Form.Group>
        <Button type="submit" variant="primary" size="lg">LOG IN</Button>{' '}
      </Form>
    </div>
  );
}
