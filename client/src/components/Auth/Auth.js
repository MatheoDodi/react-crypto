import React, { useState } from 'react';

const Auth = () => {
  const [usernameVal, setUsernameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');

  const handleChange = (e, changeFunc) => {
    changeFunc(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:5000/api/user/register', {
      method: 'POST',
      body: JSON.stringify({
        name: usernameVal,
        email: emailVal,
        password: passwordVal
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(user => console.log(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        name="username"
        value={usernameVal}
        onChange={e => handleChange(e, setUsernameVal)}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        value={emailVal}
        onChange={e => handleChange(e, setEmailVal)}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        value={passwordVal}
        onChange={e => handleChange(e, setPasswordVal)}
      />
      <button onClick={handleSubmit}>Signup</button>
    </form>
  );
};

export default Auth;
