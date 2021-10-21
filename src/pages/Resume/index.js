import React from "react";

function Resume() {
  return (
    <section id='resume'>
      <div>
        <h1 id='myResume'> My Resume</h1>

        <p>
          {" "}
          Front-end Proficiencies
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Responsive design</li>
          </ul>
        </p>
        <p>
          {" "}
          Back-end Proficiencies
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Resume;
