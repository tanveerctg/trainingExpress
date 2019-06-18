import React from 'react';
import classes from './Features.module.scss';
import bg from '../../img/wave.png';


export default function Features() {
    return (
        <div  className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.firstPart}><h1>uasdb</h1></div>
                <div className={classes.secondPart}>
                    <div className={classes.secondPartWrapper}>
                 
                      <h1 className={classes.title}>Why coose us</h1>
                
                      <div className={classes.points}>
                        
                     </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
