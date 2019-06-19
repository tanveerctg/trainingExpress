import React from 'react';
import classes from './Features.module.scss';
import bg from '../../img/wave.png';


export default function Features() {

    
    return (
        <div  className={classes.container}>

            <div className={classes.wrapper}>

                <div className={classes.firstPart}>

                    <div className={classes.firstPartWrapper}>
                        <section className={classes.firstSection}>
                            <div className={classes.firstAid}>First Aid</div>
                            <div className={classes.safeGuarding}>Safeguarding</div>
                        </section>
                        <section className={classes.secondSection}>
                            <div className={classes.health}>Health</div>
                            <div className={classes.foodHygiene}>foodHygiene</div>
                        </section>
                    </div>

                </div>

                <div className={classes.secondPart}>

                    <div className={classes.secondPartWrapper}>
                      <h1 className={classes.title}>Why coose us</h1>
                      <div className={classes.points}>
                        <div className={classes.paragraph}>
                            <p>Our trusted, high quality and affordable online courses are designed to train individuals to become experts in their field</p>
                        </div>
                        <ul className={classes.features}>
                            <li>Accredited Certification</li>
                            <li>Meets UK EU Standards</li>
                            <li>Developed by Qualified Professionals</li>
                            <li>Engaging Audio Visual Training</li>
                            <li>Instant Course Access</li>
                            <li>Study Wherever, Whenever</li>
                            <li>Instant Digital Certificate</li>
                            <li>Premium Support: Live Chat, Email, Telephone</li>
                        </ul>
                      </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
