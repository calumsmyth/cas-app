import React from "react";
import frontOnPhoto from '../assets/images/frontOnPhoto.jpg';
import "../styles.css";



const Home = () => {
    return(
    <>
    {/* <div class="title">
        <h1>HOMEPAGE</h1>
    </div> */}

    <div className="intro">
        <img
            className="self-photo"
            src={frontOnPhoto}
            alt="A photo of me sat on a sofa looking at the camera."
            style={{maxWidth: "26%", height: "auto"}}
        />

        <div className="intro-text">
            <h2>Welcome to my website!</h2>
            <p className="intro-paragraph">
                Hello and welcome. My name is Calum and I am making a career change into Software/Web Development after over 8 years of working in the NHS as a Phyisician Associate. I enjoy problem solving and the creativity that comes with a developer role. I am particularly interested in Artifical Intelligence (AI) and its potential to impact the way we work. Web3 is also an area I am keen to learn more about and its potential impact the internet as we know it.
                </p>
            </div>
        </div>

    <div className="middle">
        <h3 className="tech-stack-title">My Tech Stack:</h3>
        <div className="tech-stack-list">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Python</p>
            <p>SQL</p>
        </div>
    </div>
    </>
    );
}

export default Home;