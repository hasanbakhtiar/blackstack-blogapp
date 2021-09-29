import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({ id,title }) => {
    return (
        <>
         <div className="box col-lg-12 col-md-6 col-sm-3 ">
          {/* <img className="photolar" src="#" alt="" /> */}
            <p className="nickname">{title}   </p> 
            

              <div className="like">
                <div className="reactions">
                  <div className="like1"><i class="fas fa-heart"></i><h6><Link to= {`/blogs/${id}`}>Detail</Link></h6></div>
                  <div className="comment"><i class="far fa-comment-alt"></i> <h6><Link to= {`/edit/${id}`}>Edit</Link></h6></div>
                </div>
                <div className="save"><i class="far fa-bookmark"></i></div>
              </div>
          </div> 
            
         

         
        </>
    )
}

export default BlogListItem
