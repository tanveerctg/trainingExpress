import React, { Component } from 'react'
import classes from './Home.module.scss';
import whiteBg from '../../img/WHITEBG.jpg';
import slogan from '../../img/sloganBlack.png';
export default class Home extends Component {

  render() {
    return (
      <div className={classes.home} >
          <img src={whiteBg} style={{width:'100%',height:'100%'}}/>
          <div className={classes.sloganContainer}>
            <img src={slogan} style={{width:'100%'}}/>
            <p className={classes.sloganText}>Join the growing community of learners gaining new skills and accredited qualifications at <strong>Training Express.</strong></p>
            
          </div>
      </div>
    )
  }
}
