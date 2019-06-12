import React,{Component} from 'react';
import Portal from '../Portal/Portal';
import { Transition,config } from 'react-spring/renderprops';
import classes from './Modal.module.scss';

// function Modal(props) {
//   console.log(props)
//   return (
//     <div>
      // {
      //   props.on ? <h1>Modal</h1> :null
      // }
//     </div>
//   )
// }

class Modal extends Component {
  render(){
    const {on}=this.props;
    return(
      <React.Fragment>
        {/* <Transition
          items={on}
          from={{ opacity: 0,height:0}}
          enter={{ opacity: 1,height:100}}
          leave={{ opacity: 0 ,height:0}}
          config={config.gentle}
          >
        {on => on && (props =>
          <Portal>
              <h1 className={classes.title}>Modal</h1>
          </Portal>
        )
        }
        
        </Transition> */}
        { on && 
          <Portal>
              <h1 className={classes.title}>Modal</h1>
          </Portal>
       
        }
     </React.Fragment>
    )
  }

}


export default Modal;
