import React from 'react';
import { Header, Logo } from '../styles/styles';
import logo from '../../assets/images/logo.svg';

export default function() {
  return (
    <Header>
      <Logo src={logo} />
    </Header>
  );
}
