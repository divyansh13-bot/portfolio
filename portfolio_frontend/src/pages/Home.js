// import eReact from "react";
// import css from "./Home.css";
// import Projcts from "./Projects";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleViewProjects() {
    navigate("/projects");
  }

  function handleHireMe() {
    navigate("/contact");
  }
  return (
    <>
      <div className="home">
        <div className="overlay">
          <h1 style={{fontFamily: "Cursive"}}>Hi, I'm Divyansh 👋</h1>
          <p style={{fontFamily: "ui-serif"}}> Full Stack Developer focused on building fast, responsive, and user-friendly web applications using modern technologies.</p>

          <div className="buttons">
            <button onClick={handleViewProjects}>View Projects</button>
            <button onClick={handleHireMe}>Hire Me</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
