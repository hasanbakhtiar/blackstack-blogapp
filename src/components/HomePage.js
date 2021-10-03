import React,  { Component }  from 'react'
import home1 from '../images/home1.jpeg'
import news1 from '../images/news1.png';
import video1 from '../images/video1.jfif';
import video2 from '../images/video2.jfif';
import video3 from '../images/video3.jfif';
import video4 from '../images/video4.jfif';
import video5 from '../images/video5.jfif';
import story1 from '../images/story1.png';
import Blogs from './BlogListPage';
import Contact from './ContactPage';
import Footer from './Footer';



class Video extends Component {
 
    state = {
        products: [
           
          {

            "id" : "1",
            "src": [
                video1,
                video2,
                video3,
                video4,
                video5

            ],
          }
        ],

        index: 0
    };

    handleTab = index => {
        this.setState({index: index})
    }

    render() {

        const {products, index} = this.state;
        

        return (
        <div className="video">
         <div className="container">
             <div className="video-section">
              <div className="video-title">
                <div className="heading">
                    <h2 className="title">🎬 The Videos</h2>
                    <span className="subtitle">Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome.</span>
                </div>
              </div>

              {
                      products.map(item =>(
                    <div className="image-box" key={item.id}>
                        <div className="right-background"></div>
                 
                            <div className="video-img">
                        <div className="group-box">
                            <div className="play-btn">
                                <div className="play-icon">
                                    <div className="icon">
                                        <span>
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z"></path></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
  
                           
                            <img src={item.src[index]} className="image" />
                                  
                           
                        </div>
                    </div>
  
                    <div className="image-group">
                    {
                        item.src.map((img,index) => (
                        <div className="image-detail">
                          
                                <div className="play-icon2">
                                    <span>
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z"></path></svg>
                                    </span>
                                </div>
                           
  
                            <div className="thumb">
                                    <div className="zoom-in">
                                    <figure>
                                    <img src={img} className="side-img" key={index} onClick={() => this.handleTab(index)}/>
                                    </figure>
                                </div>
                                
                            </div>
                        </div> 
                          ))
                        }                    
                    </div>                   
                </div>
              ))
            }
             </div>
         </div>
        </div>
        )
    }
}



const HomePage = () => {
    return (
        <div>
            <div className="main">
            <div className="main-container">
                <div className="element"></div>
                <img src={home1} className="home-img" />
            </div>
            <div className="container">
                <div className="main-text">
                    <h1 className="title">The hidden world of whale culture</h1>
                    <p className="text">From singing competitions to food preferences, scientists are learning whales have cultural differences once thought to be unique to humans.</p>
                 <div className="button-group">
                     <a href="#" className="read">Read more</a>
                     <a href="#" className="play">Play video 
                     <i class="far fa-play-circle"></i>
                     </a>
                 </div>
             </div>
            </div>
        </div>
        <div className="news">
            <div className="container">
                <div className="news-section">
                    <div className="newsletter">
                        <h2 className="title">Join our newsletter 🎉</h2>
                        <span className="news-text">Read and share new perspectives on just about any topic. Everyone’s welcome.</span>
                        <ul className="news-list">
                            <li>
                                <span className="count" style={{backgroundColor:"rgb(219,234,254)", color:"rgb(30,64,175)"}}>01</span>
                                <span className="text">Get more discount</span>
                            </li>

                            <li className="magazine">
                                <span className="count">02</span>
                                <span className="text">Get premium magazines</span>
                            </li>
                        </ul>

                        <form className="news-form">
                            <input type="email" className="mail" placeholder="Enter your mail" />
                            <button className="btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                            </button>
                        </form>
                    </div>
                    <div className="news-img">
                      <div className="nc-image">
                      <img src={news1} />
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <Video/>
        <Blogs/>

        <div className="story">
             <div className="container">
                <div className="story-section">
                    <div className="info-text">
                        <span className="txt">SUPPER CHANGE YOUR PLANNING POWERS</span>
                        <h2 className="title">Become an author and share your great stories</h2>
                        <span className="story-text">Become an author you can earn extra income by writing articles. Read and share new perspectives on just about any topic. Everyone’s welcome.</span>
                        
                     <button className="author-btn">Become an author</button>
                    </div>
                    <div className="story-img">
                      <div className="st-image">
                      <img src={story1} />
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <Contact />
        <Footer />
        </div>
    )
}

export default HomePage
