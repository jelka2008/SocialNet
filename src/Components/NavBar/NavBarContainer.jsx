import React from 'react';
import NavBar from './NavBar'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        NavBars: state.NavBars
    }
  }

const NavBarContainer = connect (mapStateToProps) (NavBar);

export default NavBarContainer