import React, { Component } from 'react';
// import PostData from '../data/post.json'
class PostDetails extends Component{
    render(){
        const {post} = this.props
        return (
            <div>
                <h1> {post.title}</h1>
                <p> {post.content} </p>
            </div>
        )
    }

}

export default PostDetails
