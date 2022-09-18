import React, {useRef} from 'react'
import {   Row ,Col } from 'reactstrap';
import { init } from 'ityped'
import { Container  } from '@mui/material';
import { useEffect } from 'react';


const Hero = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            backDelay:1500,
            showCursor:true,
            strings:[
                ' Vikash Chaurasia',
                ' a FrontEnd Web Developer'
            ]
        })
    },[])

  return (
    <>
        <section className='hero-section' id='home'>
        <Container className='hero-container'>
            <Row>
                <Col lg = '6' md='6'>
                    <div className="hero-content">
                        <h5 className='mb-3'>Welcome to my world !</h5>
                        <h1 className='hero-title mb-5'>I'm <span ref={textRef}></span></h1>
                        <p>I am Vikash Chaurasia. A b.tech graduate from
                            Inderprastha Engineering college (ghaziabad).
                            I live in Delhi and my home town in Gorakhpur.
                            I want to be Frontend Developer. My main Technology are React.Js</p>
                        <div className="mt-4 ">
                            <button className="btn ms-2 hire-btn1"><a href='mailto:jaichaurasia90@gmail.com' target="_blank"><i className="fas fa-paper-plane"/> Hire Me</a></button>
                            <button className='btn ms-5 hire-btn2'><a href='https://github.com/vikash7379' target="_blank"> <i className="fab fa-github"/> GitHub</a></button>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="hero-img">
                        <img src = "img/header-img.svg" alt ="img" className='w-100 ' id="hero-main-img"/>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    </>
  )
}

export default Hero