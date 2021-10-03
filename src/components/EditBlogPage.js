import React from 'react'
import BlogForm from './BlogForm'
import {connect} from 'react-redux';
import {editBlog} from '../actions/blogs';
import Footer from './Footer';

const EditBlogPage = (props) => {
    return (
        <div className="about">
        <div className="container">
            <div className="about-section">
                <div className="about-title">
                    <div className="heading">
                    <h2 className="title">My Blog</h2>
                    </div>
                </div>
                <div className="itemsler col-lg-12 col-md-6 col-sm-3 ">
            <h1 style={{color:"#fff"}}>Edit Blog</h1>
            <BlogForm 
                blog={props.blog}
                onSubmit = {(blog) => {
                    props.dispatch(editBlog(props.blog.id, blog));
                    props.history.push('/blogs');
                }}
            />
        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state,props) => {
    return {
        blog: state.blogs.find((b) => {
            return b.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage);
