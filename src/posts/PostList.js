import React, { Component } from 'react';
import PostData from '../data/post.json'
import PostDetails from './PostDetails'

class PostList extends Component{
    render(){
        return (
            <div>
                <h1>hi thereee</h1>
                {PostData.map((item, index) => {
                    return < PostDetails post = {item} key={ `post-list-key ${index}`}/>
                })}
            </div>
        );
    }

}

export default PostList;
