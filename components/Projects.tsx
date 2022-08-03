import React from "react";
import style from "../styles/Window.module.scss";
const Projects = () => {
    return (
        <div className={style.myworks}>
            <h2>academic 🏫</h2>
            <div>
                <h3>book store</h3>
                <p>
                    This was my first web project and was built using procedural
                    PHP, working on this project introduced me to different web
                    technologies like PHP, MySQL, javascript, and CSS
                </p>
            </div>
            <div>
                <h4>application management staff module</h4>
                <p>
                    This was the project I did for my BCA final semester,
                    working on this project introduced me to Java core, Java EE,
                    JDBC, and this project vastly helped me improve my java
                    skills
                </p>
            </div>
            <h2>hobby 💻</h2>
            <div>
                <h4>sort visualizer</h4>
                <p>
                    An array sorting application which visualizes different
                    sorting algorithms built using react and typescript
                </p>
            </div>
            <div>
                <h4>conway&apos;s game of life visualizer</h4>
                <p>
                    The Game of Life, devised by the British mathematician John
                    Horton Conway It is a zero-player game, meaning that its
                    evolution is determined by its initial state, requiring no
                    further input. One interacts with the Game of Life by
                    creating an initial configuration and observing how it
                    evolves. This project combines &quot;game of life&quot; with
                    React.js to create beautiful visualizations. tools used for
                    this project are React.js and TypeScript
                </p>
            </div>
        </div>
    );
};

export default Projects;
