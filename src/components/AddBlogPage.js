import React from 'react'
import BlogForm from './BlogForm';
import {connect} from 'react-redux';
import {addBlog} from '../actions/blogs';
import Footer from './Footer';
const AddBlogPage = (props) => {
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
            <h1 style={{color:"#fff"}}>Add Blog</h1>
            <BlogForm onSubmit={(blog) => {
                props.dispatch(addBlog(blog));
                props.history.push('/blogs');
            }}/>

</div>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default connect()(AddBlogPage);
