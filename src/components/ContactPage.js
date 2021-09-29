import React from 'react'

const ContactPage = () => {
    return (
        <div className="contact">
        <div className="contact-container"></div>
        <div className="container">
              <header className="contact-header">
                  <h2 className="title">Contact us</h2>
                  <span className="subtitle">Drop us message and we will get back for you.</span>
              </header>
              <div className="contact-box">
                  <div className="contact-inner">
                     <div className="first-item">
                         <div className="address">
                             <h3>🗺 ADDRESS</h3>
                             <span>Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</span>
                         </div>
                         <div className="email">
                             <h3>💌 EMAIL</h3>
                             <span>nc.example@example.com</span>
                         </div>
                         <div className="phone">
                             <h3>☎ PHONE</h3>
                         <div className="social-icons">
                             <h3>🌏 SOCIALS</h3>
                             <span>000-123-456-7890</span>
                         </div>
                             <nav className="social-elements">
                                 <a href="#" className="element">
                                 <i class="fab fa-facebook-square"></i>
                                 </a>
                                 <a href="#" className="element">
                                 <i class="fab fa-twitter"></i>
                                 </a>
                                 <a href="#" className="element">
                                 <i class="fab fa-youtube"></i>
                                 </a>
                                 <a href="#" className="element">
                                 <i class="fab fa-instagram"></i>
                                 </a>

                             </nav>
                         </div>
                     </div>
                     
                      <div className="second-item">
                          <form  className="inputs">
                              <label className="name">
                                  <span>Full name</span>
                                  <input type="text" className="fullname" placeholder="Example Doe" />
                              </label>

                              <label className="email-address">
                                  <span>Email address</span>
                                  <input type="text" className="add" placeholder="example@example.com" />
                              </label>

                              <label  className="message">
                                  <span>Message</span>
                                  <textarea  cols="30" rows="6"></textarea>
                              </label>

                              <button className="send">Send Message</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>

    </div>
    )
}

export default ContactPage
