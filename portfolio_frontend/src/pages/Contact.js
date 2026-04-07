import { useState } from "react";
import API from "../services/api";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("contact/", form)
      .then(() => {
        alert("Message sent ✅");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="div-main">
      <div className="div-contact">
        <h1 className="contact-title">Contact Me</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input-field"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="input-field"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="input-field textarea"
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit
          </button>

          <h2 className="social-title">Also Contact me on:</h2>

          <a
            href="https://www.instagram.com/divyansh13.__/"
            target="_blank"
            rel="noreferrer"
            className="social-link insta"
          >
            <FaInstagram /> <span>@divyansh13.__</span>
          </a>

          <a
            href="https://www.linkedin.com/in/divyansh-burman-35812a303/"
            target="_blank"
            rel="noreferrer"
            className="social-link linkedin"
          >
            <FaLinkedin /> <span>Divyansh Burman</span>
          </a>
        </form>
      </div>
    </div>

    // <div className="div-main">
    //   <div className="div-contact" style={{ padding: "20px" }}>
    //     <h1 style={{ fontFamily: "math", color: "white" }}>Contact Me</h1>

    //     <form onSubmit={handleSubmit}>
    //       <input
    //         name="name"
    //         value={form.name}
    //         onChange={handleChange}
    //         placeholder="Your Name"
    //         style={{
    //           height: "45px",
    //           width: "500px",
    //           borderRadius: "15px",
    //           backgroundColor: "beige",
    //         }}
    //       />
    //       <br />
    //       <br />
    //       <input
    //         name="email"
    //         value={form.email}
    //         onChange={handleChange}
    //         placeholder="Your Email"
    //         style={{
    //           height: "45px",
    //           width: "500px",
    //           borderRadius: "15px",
    //           backgroundColor: "beige",
    //         }}
    //       />
    //       <br />
    //       <br />
    //       <textarea
    //         name="message"
    //         value={form.message}
    //         onChange={handleChange}
    //         placeholder="Your Message"
    //         style={{
    //           height: "65px",
    //           width: "500px",
    //           borderRadius: "15px",
    //           backgroundColor: "beige",
    //         }}
    //       ></textarea>
    //       <br />
    //       <br />

    //       <button type="submit">Submit</button>

    //       <h2 style={{fontFamily: "math"}}>Also Contact me on:</h2>

    //       <a
    //         href="https://www.instagram.com/divyansh13.__/#"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
    //       >
    //         <FaInstagram size={25} color="#E1306C" />
    //         <span>@divyansh13.__</span>
    //       </a>
    //       <br />
    //       <a
    //         href="https://www.linkedin.com/in/divyansh-burman-35812a303/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BfJyA5dh%2BQ9Sk1CQ4mqj7jA%3D%3D"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
    //       >
    //         <FaLinkedin size={25} color="#265cd9" />
    //         <span>Divyansh Burman</span>
    //       </a>

    //     </form>
    //   </div>
    // </div>
  );
}

export default Contact;
