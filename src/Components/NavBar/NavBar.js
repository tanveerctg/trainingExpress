import React, { Component } from 'react'
import classes from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import traing_logo from '../../img/TR.jpg';

export default class NavBar extends Component {
    
    render() {
        return (
            <nav className={classes.navContainer} >
                <div  className={classes.nav}>
                    <div  className={classes.logo}>
                        <img src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/05/logo-final-1.png" id="header_logo" alt="Training Express" style={{width:'95%'}}></img>
                    </div>
                    <div className={classes.navItem}>
                        <span className={classes.item1}>
                            <span style={{marginRight:'5px'}}>Courses</span>
                            <FontAwesomeIcon
                                icon={['fas','chevron-down']}
                                className={classes.downIcon}
                                />
                        </span>
                        <span className={classes.course}>
                            Training Teams
                        </span>
                        <span className={classes.course}>
                            Help
                        </span>
                        <span className={classes.course}>
                            Contact
                        </span>
                    </div>
                
                    <div className={classes.search}>
                            <FontAwesomeIcon
                            icon={['fas','search']}
                            transform="grow-1" 
                            className={classes.searchIcon}
                            />
                        <input type="text" placeholder="What do you want to know ?" className={classes.input}/>
                    </div>
                    
                    <div className={classes.signinsignup}>
                        <button className={classes.login}>Login</button>
                        <button className={classes.signUp}>Sign Up</button>
                    </div>
                </div>
        </nav>
        )
    }
}
