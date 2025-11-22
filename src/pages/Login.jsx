import { useState } from 'react';

const Login = () => {

  const [state, setState] = ('Sign up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (

    <form className='min-h-[80vh] flex items-center '>

      <div>
        <p>{state === 'Sign up' ? "Create Account" : "Login"}</p>
        <p>please {state === ' Sign up ' ? " Sign up" : "log in "} to book Appointment </p>

        <div>
          <p> Full Name   </p>
          <input type="text" onChange={(e) => setName(e.target.name)} value={name} required />
        </div>
        <div>
          <p> Email   </p>
          <input type="Email" onChange={(e) => setName(e.target.name)} value={name} required />
        </div>
        <div>
          <p> Password  </p>
          <input type="Password" onChange={(e) => setName(e.target.name)} value={name} required />
        </div>
        <button>{state === 'Sign up' ? "Create Account" : "Login"}</button>
      </div>
    </form>
  )
};

export default Login;
