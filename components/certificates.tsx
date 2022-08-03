import React from "react";
import style from "../styles/Window.module.scss";

const certificates = () => {
    return (
        <div className={style.certificate}>
            <div>
                <h2>Online Certificates</h2>
                <div>
                    <h3>Machine Learning</h3>
                    <h4>Stanford Online</h4>
                    <div>
                        <a href="">certificate</a>
                    </div>
                    <span>this is a course done by andrew ng</span>
                </div>
                <div>
                    <h3>Data Science professional certificate</h3>
                    <h4>IBM</h4>
                    <div>
                        <a href="">certificate</a>
                    </div>
                    <span>this is a course done by andrew ng</span>
                    <div>
                        <p>this certificate contains 10 courses</p>
                        <ul>
                            <li>Python for Data Science, AI & Development</li>
                            <li>Applied Data Science Capstone</li>
                            <li>Machine learning with Python</li>
                            <li>Data Science Methodology</li>
                            <li>Data Visulaization with Python</li>
                            <li>Data Analysis with Python</li>
                            <li>
                                Databases and SQL for Data Science with Python
                            </li>
                            <li>What is Data Science?</li>
                            <li>Python project for Data Science</li>
                            <li>Tools for Data Science</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h2>Academic Certificates</h2>
            </div>
        </div>
    );
};

export default certificates;
