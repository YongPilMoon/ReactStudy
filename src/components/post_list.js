import React  from 'react';
import PostListItem from './post_list_item';

const PostList = (props) => {
    const postItems = props.posts.map((post) => {
        return (
            <PostListItem
                onPostSelect={props.onPostSelect}
                post={post}/>
        );
    });

    return (
        <ul>
            {postItems}
        </ul>
        );
};

export default PostList