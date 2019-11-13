import React from 'react';

const Home = () => {
    return (
        <>
        <div className="card">
            <div className="cardContent">
                <h1>Jackson Ogles</h1>
                <p> 
                    My ikigai (pronounced "aye-kee-guy") is centered 
                    in software engineering principles and using them in a practical way.
                    You could say it's the reason I get up in the morning!
                </p>
                <p>🛌 ➡ 🕺</p>
                <p><a>View Projects</a></p>
            </div>
            <div style={textAlign='center'}>
                <a 
                    href="https://en.wikipedia.org/wiki/Ikigai" 
                    target="_blank"
                >
                    <img 
                        className="cardImage"
                        src="images/ikigai.jpg" 
                        alt="ikigai = a japanese word/notion for life meaning being found" 
                    />
                </a>
            </div>
        </div>
        </>
    )
}

export default Home;