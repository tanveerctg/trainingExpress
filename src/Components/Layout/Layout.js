import React, { Component } from 'react'
import classes from './Layout.module.scss';
import NavBar from '../NavBar/NavBar';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import Modal from '../Modal/Modal';

export default class Layout extends Component {
  state={
    toggle: false,
    hamburgerToggle:false
  }
  hamburgerToggle=()=>{
    const prev = this.state.hamburgerToggle;
    this.setState({ hamburgerToggle: !prev });
  }
  render() {
    console.log('hamburger',this.state.hamburgerToggle)
    return (
      <div>
        <HamburgerIcon hamburgerToggle={this.hamburgerToggle} on={this.state.hamburgerToggle}/>
        <Modal on={this.state.hamburgerToggle} toggle={this.hamburgerToggle}
        />
        <NavBar />
        <main  >
            {this.props.children}
        </main>
      </div>
    )
  }
}
