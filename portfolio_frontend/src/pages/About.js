import React from "react";

function About() {
    return (
        <>
        <div className="div-about">
            <div className="about-content" style={{ marginTop: '10px', color: 'white' }}>
                <h1 style={{fontFamily: "ui-rounded"}}>About Me</h1>
                <br />
                <p style={{fontFamily: "ui-serif", fontSize: "20px"}}>I am a passionate Full Stack Developer with a strong focus on building fast, responsive, 
                    and user-friendly web applications using modern technologies. With a solid foundation in both front-end (HTML, CSS, JavaScript,
                    Reactjs, jQuery) and back-end (Python, Django, MySQL ) development, I strive to create seamless and engaging digital
                    experiences. My expertise includes working with popular frameworks and libraries, as well as a commitment to staying
                    up-to-date with the latest industry trends. I am dedicatedto delivering high-quality code and collaborating effectively to
                    bring innovative ideas to life.</p>
            </div>

        </div>
        </>
    );
}

export default About;