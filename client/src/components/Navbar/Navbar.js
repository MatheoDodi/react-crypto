import React from 'react';
import { Header, Logo } from '../styles/styles';
import logo from '../../assets/images/logo.svg';
import Search from '../Search/Search';

export default function() {
  return (
    <Header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: '2rem',
          margin: 0,
          marginBottom: 10
        }}
      >
        CRYPT
        <Logo src={logo} />
      </div>
      <Search />
    </Header>
  );
}
