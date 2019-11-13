import React from 'react';

const Project2 = () => {
    return (
        <>
        <div className="card">
            <div className="cardContent">
                <h2>Project Title Second Best Insert Here</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Itaque reprehenderit natus corporis blanditiis vero ducimus? 
                    Laborum, omnis. Harum ullam optio distinctio quasi excepturi cum nobis! 
                    Culpa, commodi. Aut, tenetur eveniet.
                </p>
                <div>
                    <button>Explore Project</button>
                    <div>
                        <a href="#">View Website</a>
                        <a href="#">View Code</a>
                    </div>
                </div> 
            </div>
            <img 
                className="cardImage" 
                src="images/circuit-board.jpg" 
                alt="picture of circuit board floating in the air"
            />
        </div>
        </>
    )
}

export default Project2;