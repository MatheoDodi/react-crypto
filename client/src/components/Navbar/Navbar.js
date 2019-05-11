import React from 'react';
import { Header, Logo } from '../styles/styles';
import logo from '../../assets/images/logo.svg';

export default function() {
  return (
    <Header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: '2rem',
          margin: 0
        }}
      >
        CRYPT
        <Logo src={logo} />
      </div>
    </Header>
  );
}
