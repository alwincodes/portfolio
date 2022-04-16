import React from "react";
import style from "../styles/Window.module.scss";

type AboutMe = {
    data: string;
};
const AboutMe: React.FC<AboutMe> = ({ data }) => {
    return (
        <div className={style.aboutme}>
            {data}
            <p>
                Hi my name is alwin mathew, I&apos;m a computer science student
                currently based in kerala🌴, India.
            </p>
            <p>
                I have been interested in computer science from a very young
                age, this curiosity lead me to study computer science for my
                undergraduates degree at St george&apos; college, aruvithura.
            </p>
            <p>
                Currently I&apos;m set to join Msc Data science at university of
                salford on september 2022
            </p>
            <p>
                I&apos;m an active learner and is willing to learn new
                technologies as per requirement, Currently, I&apos;m intrigued
                by ML and Data Science as I believe it is the future
            </p>
            <h3>my interests</h3>
            <p>
                I&apos;m interested in typeScript for web developement and
                python for machine learning applications
            </p>
            <h4>Web Stack </h4>
            <p>
                I have done several web projects for academic purposes and as a
                hobby, I have used Java EE, Node.js, Python for creating backend
                servers and API endpoints (RESTfull and GraphQl). For the
                frontend, I have worked with React, Next.js, and Gatsby for
                creating client-side rendered, server-side rendered, and
                statically generated applications, HTML5, CSS3 for creating
                static pages, and JSON and XML for sending and receiving data
            </p>
            <h4>Databases</h4>
            <p>
                I have experience with MySql, PostgreSQL, MongoDB, and Redis,
                these technologies are incorporated in some of my personal
                projects
            </p>
        </div>
    );
};

export default AboutMe;
