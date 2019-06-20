import React, { Component } from 'react'
import classes from './OurCourses.module.scss';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
export default class OurCourses extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <Slider {...settings}>
                        <div >
                            <div style={{margin:'0 10px'}}>
                                <h3 className={classes.item}>1</h3>
                            </div>
                         
                        </div>
                        <div >
                        <div style={{margin:'0 10px'}}>
                                <h3 className={classes.item}>2</h3>
                            </div>
                        </div>
                        <div >
                        <div style={{margin:'0 10px'}}>
                                <h3 className={classes.item}>3</h3>
                            </div>
                        </div>
                        <div >
                        <div style={{margin:'0 10px'}}>
                                <h3 className={classes.item}>4</h3>
                            </div>
                        </div>
                        <div >
                        <div style={{margin:'0 10px'}}>
                                <h3 className={classes.item}>5</h3>
                            </div>
                        </div>
                        <div >
                        <div style={{margin:'0 10px'}}>
                                <h3 className={classes.item}>6</h3>
                            </div>
                        </div>
                        <div >
                        <div style={{margin:'0 10px'}}>
                                <h3 className={classes.item}>7</h3>
                            </div>
                        </div>
                        <div >
                        <div style={{margin:'0 10px'}}>
                                <h3 className={classes.item}>8</h3>
                            </div>
                        </div>
                        <div >
                        <div style={{margin:'0 10px'}}>
                                <h3 className={classes.item}>9</h3>
                            </div>
                        </div>
                    </Slider>
                </div>

         
            </div>
        )
    }
}
      
