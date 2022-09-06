import React from 'react'

const Contact = () => {
  return (
    <>
        <div id="contact">
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <a href="mailto: jaichaurasia90@gmail.com" >
                        <p className="mail"><i className="fas fa-paper-plane"></i>jaichaurasia90@gmail.com</p>
                    </a>
                    <p><i className="fas fa-phone-square-alt"></i>+91 7379664300</p>
                    <div className="social-icon">
                        <a href="https://www.facebook.com/jai.chaurasiall/" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/jaichaurasia7" target="_blank"><i className="fab fa-twitter-square"></i></a>
                        <a href="https://github.com/vikash7379" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/vikash-chaurasia/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <a href="https://drive.google.com/file/d/1fglFCbTzntRGD_1jUpMnfp3oupnTIU7J/view?usp=sharing" target="_blank" id="btn-cv">Downlod CV</a>
                </div>
                <div className="contact-right">
                    <form action="https://formspree.io/f/xqkjeqwl" method="POST">
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn btn2">Submit</button>
                    </form>
                    <span id="msg"></span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact