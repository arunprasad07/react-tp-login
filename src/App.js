import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log('Logged in');
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log('Details not match');
      setError('Details do not match!!!');
    }
  };

  const LogOut = () => {
    setUser({
      email: '',
      name: '',
    });
  };

  return (
    <div className='App'>
      {user.email !== '' ? (
        <div className='welcome'>
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button type='button' onClick={LogOut}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
