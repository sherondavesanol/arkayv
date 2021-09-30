// React
import { useContext, useState, useEffect } from 'react';
import UserContext from '../../UserContext';

// Style
import { StyledButton, StyledSecondaryButton, StyledInput, StyledGuide, StyledToggler } from './LoginForm.style';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// API
import { CHECK_EMAIL_URL, SIGNUP_URL, LOGIN_URL, GET_USER_DETAILS, defaultOptions } from '../../API';

export default function LoginForm(props) {

  const {user, setUser} = useContext(UserContext);

  const [isRegistered, setIsRegistered] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
	const [isLoginDisabled, setIsLoginDisabled] = useState(true);
	const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);

  useEffect(() => {

		[firstName, lastName, email, password].some(value => value === '') 
		|| (password.length < 8)
			? setIsSignUpDisabled(true) 
			: setIsSignUpDisabled(false);

		[email, password].some(value => value === '') 
		|| (password.length < 8)
			? setIsLoginDisabled(true) 
			: setIsLoginDisabled(false);

	}, [firstName, lastName, email, password]);

  const clearFormState = () => {

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  const toSignup = () => {

    clearFormState();
    setIsRegistered(false);
  }

  const toLogin = () => {

    clearFormState();
    setIsRegistered(true);
  }

  const closeForm = () => {

    props.handleClose();
    clearFormState();
    
    setTimeout(() => {
      setIsRegistered(true)
    }, 200);
  }

  const fetchSignup = (e) => {

		e.preventDefault();

    setEmail('');
    setPassword('');
    
    fetch(CHECK_EMAIL_URL, {...defaultOptions, body: JSON.stringify({email})})
    .then(data => data.json())
    .then(data => data
        ? alert('email already exists')
        : fetch(SIGNUP_URL, {...defaultOptions, body: JSON.stringify({email, password, firstName, lastName})})
            .then(data => data.json())
            .then(data => data ? setIsRegistered(true) : alert('error occured')));
  };

  const fetchLogin = (e) => {
    
		e.preventDefault();
    
    fetch(LOGIN_URL, {...defaultOptions, body: JSON.stringify({email, password})})
      .then(data => data.json())
      .then(data => {
        
        if (typeof data !== undefined) {
          
          localStorage.setItem('token', data.access);
          userDetails(data.access);
        }
      });

    const userDetails = (token) => {

      fetch(GET_USER_DETAILS, {headers: {'Authorization': `Bearer ${token}`}})
      .then(data => data.json())
      .then(data => {
        
        setUser({id: data._id, isAdmin: data.isAdmin})

        user.id !== undefined
          ? closeForm()
          : alert('login failed')
      });
    };	
  }

  const signupForm = (
    <Form className='py-3' onSubmit={fetchSignup}>
      <h3 className='text-center'>BE A PART OF OUR COMMUNITY</h3>
      <p className='text-center'>Create your ARKAYV® account and get access to our offered products and more.</p>

      <Form.Group className='mt-4'>
        <StyledInput 
          type="email" 
          placeholder="Email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </Form.Group>
      <Form.Group>
        <StyledInput 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </Form.Group>
      <Form.Group>
        <StyledInput 
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          />
      </Form.Group>
      <Form.Group>
        <StyledInput 
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}/>
      </Form.Group>

      <div className='d-flex justify-content-between'>
        <StyledButton className='py-2' type="submit" disabled={isSignUpDisabled}>
          Submit
        </StyledButton>
        <StyledSecondaryButton className='py-2' type='button' onClick={closeForm}>
          Close
        </StyledSecondaryButton>
      </div>

      <StyledGuide className='mt-4'>
        Already registered?
        <StyledToggler onClick={toLogin}> Login</StyledToggler>
      </StyledGuide>
    </Form>
  );

  const loginForm = (
    <Form className='py-3' onSubmit={fetchLogin}>
      <h3 className='text-center'>WELCOME TO ARKAYV®</h3>

      <Form.Group className='mt-4'>
        <StyledInput
          type="email" 
          placeholder="Email address" 
          value={email}
          onChange={(e) => {setEmail(e.target.value)}} />
      </Form.Group>
      <Form.Group>
        <StyledInput
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => {setPassword(e.target.value)}} />
      </Form.Group>

      <div className='d-flex justify-content-between'>
        <StyledButton className='py-2' type="submit" disabled={isLoginDisabled}>
          Login
        </StyledButton>
        <StyledSecondaryButton className='py-2' type='button' onClick={closeForm}>
          Close
        </StyledSecondaryButton>
      </div>

      <StyledGuide className='mt-4'>
        Not yet registered?
        <StyledToggler onClick={toSignup}> Create account</StyledToggler>
      </StyledGuide>
    </Form>
  );

  let form = isRegistered
    ? loginForm
    : signupForm
  
  return (
      <Modal show={props.show} onHide={closeForm} centered>
        <Modal.Body>
          {form}
        </Modal.Body>
      </Modal>
    );
  }