import React from 'react';

const PostListItem = ({post, onPostSelect}) => {
    return (
        <li onClick={() => onPostSelect(post)}>
            <p>{post.title}</p>
        </li>
    )
};

export default PostListItem