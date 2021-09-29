import React from 'react'
import {connect} from 'react-redux';
import BlogListItem from './BlogListItem';

const BlogList = (props) => {
    console.log(props)
    return (
        <div className="about">
        <div className="container">
            <div className="about-section">
                <div className="about-title">
                    <div className="heading">
                    <h2 className="title">Explore other latest articles</h2>
                <span className="subtitle">Explore 1129 other articles</span>
                    </div>
                </div>
                <div className="itemsler col-lg-12 col-md-6 col-sm-3 ">
        
            {props.blogs.map(blog => {
                return <BlogListItem key={blog.id} {...blog} />
            })}
       

        </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}


// Higher Order Component (HOC)
export default connect(mapStateToProps)(BlogList);
