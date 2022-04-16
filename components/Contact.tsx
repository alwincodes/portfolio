import React from "react";
import { FiLinkedin, FiMail } from "react-icons/fi";
import style from "../styles/Contact.module.scss";
const Contact: React.FC<{ email: string; linkedin: string }> = ({
    email,
    linkedin,
}) => {
    return (
        <div className={style.contact}>
            <div>
                <p>
                    <a href={`mailto:${email}`}>
                        <FiMail />
                    </a>
                </p>
                <p>
                    <a href={`${linkedin}`}>
                        <FiLinkedin />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
