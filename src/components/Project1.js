import React from 'react';

const Project1 = () => {
    return (
        <>
            <img src="images/binary.jpg" alt="picture of notebook with binary code on it"/>
            <div>
                <h2>Github API Traversal</h2>
                <p>
                    Traversed Github API for user data using axios library. 
                    Created social cards via vanilla javascript instead of 
                    using the React Library.
                </p>
                <div>
                    <button>Explore Project</button>
                    <div>
                        <a href="https://cjogles.github.io/github-usercard/" target="_blank">View Website</a>
                        <a href="https://github.com/cjogles/github-usercard" target="_blank">View Code</a>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Project1;