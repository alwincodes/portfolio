import React from "react";
import {
    FiMaximize,
    FiMinimize,
    FiMinus,
    FiMove,
    FiPlus,
    FiX,
} from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import style from "../styles/Window.module.scss";

const Help = () => {
    return (
        <div className={style.help}>
            <p>
                Hi there, welcome to my <strong>portfolio</strong>, you might be
                confused with the retro aesthetic✨. Let me help you😅.
            </p>
            <h4>things you can do</h4>
            <ul>
                <li>
                    <p>
                        double click on any of the icons on the desktop to open
                        a new Window containing its content
                    </p>
                </li>
                <li>
                    <p>
                        click and drag on the <FiMove /> button to move your
                        window around the screen
                    </p>
                </li>
                <li>
                    <p>
                        click on the <FiPlus />, <FiMinus /> button to increase
                        or decrease the window size
                    </p>
                </li>
                <li>
                    <p>
                        the <FiMinimize /> and <FiMaximize /> button can be used
                        to minimize or maximize the window
                    </p>
                </li>
                <li>
                    <p>
                        finally the <FiX /> button is used to close an open
                        window
                    </p>
                </li>
            </ul>
            <p>
                built with <FcLike /> in React, using TypeScript
            </p>
        </div>
    );
};

export default Help;
