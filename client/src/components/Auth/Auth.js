import React from 'react';

const Auth = () => {
  return (
    <form>
      <label for="username">Username</label>
      <input name="username" />
      <label for="email">Email</label>
      <input name="email" />
      <label for="password">Password</label>
      <input name="password" />
      <button>Signup</button>
    </form>
  );
};

export default Auth;
