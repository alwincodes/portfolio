import React from "react";
import style from "../styles/Nav.module.scss";

function NavBar() {
    return (
        <header className={style.header}>
            <p className={style.p}>alwin mathew.</p>
            <nav>
                <ul className={style.ul}>
                    <li>projects</li>
                    <li>blog</li>
                    <li>contact_me</li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
