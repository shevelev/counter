import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import { isUserSignedIn } from 'redux/models/user';
//import PropTypes from 'prop-types';

//import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Привет</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
                <Nav navbar>
                    <LinkContainer to='/timers'>
                        <NavItem>Счетчики по зоне</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
    userSignedIn: PropTypes.bool.isRequired,
    children: PropTypes.node
};

function mapStateToProps(state) {
  return { userSignedIn: isUserSignedIn(state) };
}

export default connect(mapStateToProps)(App);
