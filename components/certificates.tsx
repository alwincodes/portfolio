import React from "react";
import style from "../styles/Window.module.scss";
import Image from "next/image";
import stanfordcertif from "../public/stan-ml-high.jpg";
import ibmcertif from "../public/ibm.jpg";

const certificates = () => {
    return (
        <div className={style.certificate}>
            <div>
                <h3>Machine Learning</h3>
                <h5>By Stanford Online</h5>
                <div style={{ width: "60%", maxWidth: "500px" }}>
                    <Image
                        src={stanfordcertif}
                        alt="my stanford online certificate"
                    />
                </div>
                <div>
                    <a
                        href="https://www.coursera.org/account/accomplishments/verify/ASW237RXG9YE"
                        target="_blank"
                        rel="noreferrer"
                    >
                        certificate
                    </a>
                </div>
                <span>
                    <p>
                        Andrew ng&apos;s machine learning course was the best
                        online course&apos;s that I have done. It delves into
                        the math behind machine learning algorithms and has
                        challenging assignments where we implement the concepts
                        in GNU Octave.
                    </p>
                    <p>
                        Implementing a neural network to predict numbers from
                        handwriting using mnist dataset was one of my favourite
                        parts of this course. It really demystified neural
                        networks for me.
                    </p>
                    <p>the main topics covered in this course are: </p>
                    <ul>
                        <li>simple linear regression</li>
                        <li>multivariate linear regression</li>
                        <li>support vector machines (SVM)</li>
                        <li>principal component analysis (PCA)</li>
                        <li>neural networks</li>
                    </ul>
                </span>
            </div>
            <div>
                <h3>Data Science professional certificate</h3>
                <h5>By IBM</h5>
                <div style={{ width: "60%", maxWidth: "500px" }}>
                    <Image
                        src={ibmcertif}
                        alt="my ibm data science professional certificate"
                    />
                </div>
                <div>
                    <a
                        href="https://www.coursera.org/account/accomplishments/professional-cert/MNB3BV6XJZG3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        certificate
                    </a>
                </div>
                <span>
                    <p>
                        I enjoyed being a part of the IBM Data Science
                        Specialization course. It was a great experience, this
                        course has great challenging assignments with real-world
                        datasets.
                    </p>{" "}
                    <p>
                        {" "}
                        It starts off with a high-level introduction to data
                        collection, preparation, and data analysis. Then the
                        course covers a wide range of topics like data
                        visualization, SQL for data exploration, and machine
                        learning.
                    </p>{" "}
                    <p>
                        {" "}
                        It includes an introduction to libraries like sci-kit
                        learn, matplotlib, plotty, seaborn, and pandas.
                        Practical assignments on the IBM cloud platform are also
                        a good addition.
                    </p>
                </span>
                <div>
                    <p>this certification consists 10 courses</p>
                    <ul>
                        <li>Python for Data Science, AI & Development</li>
                        <li>Applied Data Science Capstone</li>
                        <li>Machine learning with Python</li>
                        <li>Data Science Methodology</li>
                        <li>Data Visulaization with Python</li>
                        <li>Data Analysis with Python</li>
                        <li>Databases and SQL for Data Science with Python</li>
                        <li>What is Data Science?</li>
                        <li>Python project for Data Science</li>
                        <li>Tools for Data Science</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default certificates;
