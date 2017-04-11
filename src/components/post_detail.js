import React from 'react';

const postDetail = ({post}) => {
    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>{post.title}</div>
            <div>{post.content}</div>
        </div>
    );
};

export default postDetail