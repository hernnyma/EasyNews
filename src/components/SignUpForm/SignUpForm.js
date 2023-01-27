import {Component} from 'react'
import {signUp} from '../../utilities/users-service';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'

export default class SignUpForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
      };

      handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
        });
      };

      handleSubmit = async (evt) => {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formData);
            // Baby step!
            this.props.setUser(user)
        } catch {
          // An error occurred 
          this.setState({ error: 'Sign Up Failed - Try Again' });
        }
      };
      

      render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="form-container">
              <Form autoComplete="off" onSubmit={this.handleSubmit}>
              
                <Form.Group>
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} required placeholder='Your Name'/>
                </FloatingLabel>
                </Form.Group>

                <Form.Group>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} required placeholder="Your Email"/>
                </FloatingLabel>
                </Form.Group>

                <Form.Group>
                <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required placeholder='Your Password'/>
                </FloatingLabel>
                </Form.Group>

                <Form.Group>
                <FloatingLabel controlId="floatingInput" label="Confirm Password" className="mb-3">
                <Form.Control type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required placeholder='Confirm Password'/>
                </FloatingLabel>
                </Form.Group>

                <Button type="submit" disabled={disable} size="lg">SIGN UP</Button>
              </Form>
            </div>
          </div>
        );
      }
    }