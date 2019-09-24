import React from 'react';

function Blog(props) {
    return (
        <div className='blog-container'>
            {/* contains the description text from each trip */}
            <p>{props.description}</p>
        </div>
    )
}

export default Blog;