import React from "react";
import studentImage from "./3d.jpg"; // use relative path if inside src

export default function About() {
  return (
    <section>
      <h1>About Us</h1>
      <h2>About Us</h2>
      <p>An introduction to React Router and forms.</p>

      <h2>Our mission</h2>
      <p>Make form handling and routing simple and clear.</p>

      <h2>Tech stack</h2>
      <ul>
        <li>React</li>
        <li>React Router v6</li>
        <li>JavaScript</li>
      </ul>

      {/* Image */}
      <img src={studentImage} alt="student" style={{ maxWidth: 250, height: "auto" }} />
    </section>
  );
}
