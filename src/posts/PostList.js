import React, { Component } from 'react';
import PostData from '../data/post.json'
class PostList extends Component{
    render(){
        return (
            <div>
                <h1>hi thereee</h1>
                {PostData.map((postDetail, index) => {
                    return <h1> {postDetail.title}</h1>
                    
                })}

            </div>
        );
    }

}

export default PostList;
