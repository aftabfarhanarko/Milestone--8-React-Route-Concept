import React, { use } from 'react';

const Post = ({postes}) => {
   const promisPost = use(postes);
   console.log(promisPost);
   
    return (
        <div>
            <p>Data Post </p>
        </div>
    );
};

export default Post;