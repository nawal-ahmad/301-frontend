import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand>Cocktail App</Navbar.Brand>
          <Link to='/'>Home</Link>
          <Link to='/favorite'>favorite</Link>
        </Navbar>
      </div>
    );
  }
}

export default Header;
