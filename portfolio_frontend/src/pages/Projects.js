import { useEffect, useState } from "react";
import API from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("projects/")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>

      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
    // <div style={{ padding: "20px" }}>
    //   <h1>My Projects</h1>

    //   {projects.length === 0 ? (
    //     <p>No projects found</p>
    //   ) : (
    //     projects.map((p) => (
    //       <div key={p.id} style={{
    //         background: "#222",
    //         color: "white",
    //         padding: "15px",
    //         margin: "10px 0",
    //         borderRadius: "10px"
    //       }}>
    //         <h2>{p.title}</h2>
    //         <p>{p.description}</p>
    //         <a href={p.link} target="_blank" rel="noreferrer">View Project</a>
    //       </div>
    //     ))
    //   )}
    // </div>
  );
}

export default Projects;
