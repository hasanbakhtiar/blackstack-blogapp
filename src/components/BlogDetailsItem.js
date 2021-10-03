import React from 'react'
import Camera from '../images/camera.jfif';
import boy from '../images/boy.jfif';
import tree from '../images/derevo.jfif';
import func from '../images/func.jpg';
import Footer from './Footer';

const sekiller={
    camera:Camera,
    boy:boy,
    tree:tree,
    func:func,
}

const BlogDetailsItem = ({id,title,description}) => {
    return (
        <div>
             <div>
            <div className="navbarici">
                <div className="text-side">
                    <div className="gar-jew">
                        <div className="garden">Garden</div>
                        <div className="jewelry">Jewelry</div>
                    </div>
                    <h1 className="quiet">{title}</h1>
                    <div className="line"></div>
                    <div className="author">
                       <div className="man">
                       <img  className="boy" src={sekiller.boy} alt="" /> <h6 className="names">Fanes Mimi</h6>
                       <p className="tarix"> May 20,2021  <span> 6 min read</span> </p>
                       </div>
                        {/* <div className="icons">
                            <p className="heart" style={{"marginRight":"13px"}}><i class="fas fa-heart" style={{"marginRight":"5px"}}> </i> 733</p>
                            <p className="comment" style={{"marginRight":"13px"}}><i class="fas fa-comment" style={{"marginRight":"5px"}}></i>14</p>
                            <div class="dropdown">
                            <button class="btn btn-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="far fa-bookmark"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </div>

                            <div class="dropdown">
                                <button class="btn btn-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i style={{"transform": "translate(-2px,0px"}} class="fas fa-share-alt"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </div>

                                <div class="dropdown" style={{"paddingLeft":"1px"}}>
                                    <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i style={{"transform": "translate(-3px,0px"}} class="fas fa-ellipsis-h"></i>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </div>
                        </div> */}
                    </div>
                </div>
                <div className="tranperent-center"></div>
                <img className="img-side" src={sekiller.camera} alt="" />
            </div>
       
       <div className="secondline">
           <div className="text-side1 col-md-5">
              
           <p className="lorem1">blog title: {title}</p>
           <img className="derevo" src={sekiller.tree} alt="" />
           <p className="lorem2">{description}</p>
          
           </div>
        
           <div className="item-side1 col-md-3">
               <div className="firstbox">
                   <div className="boxnav">
                       <h5 className="discover"> <img className="iconfoto" src="https://img.icons8.com/plasticine/100/000000/news.png"/>Discover more tags</h5>
                       <a className="view">View All</a>
                   </div>
                   <div className="tagbox">
                       {/* <div className="boxses"> blog id: {id}</div> */}
                       blog id: {id}
                       
                   </div>
               </div>
           </div>
       </div>
       
        </div>
           
 
           
<Footer />
            
        </div>
    )
}

export default BlogDetailsItem
