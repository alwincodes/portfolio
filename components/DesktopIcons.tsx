import React from "react";
import Image from "next/image";
import style from "../styles/Desktopicon.module.scss";
interface props {
    setIsWindowOpen: any;
    setWindowActive?: any;
}
const DesktopIcons: React.FC<props> = ({
    setIsWindowOpen,
    setWindowActive,
}) => {
    const handleAppOpen = (val: string) => {
        setWindowActive(val);
        setIsWindowOpen((prev: any) => {
            return { ...prev, [val]: true };
        });
    };
    return (
        <div>
            <ul className={style.icon_container}>
                <li onDoubleClick={() => handleAppOpen("aboutme")}>
                    <Image
                        src={"/DarkAgent.ico"}
                        alt="retro icon of an agent"
                        width={"50rem"}
                        height={"50rem"}
                    />
                    <span>about</span>
                </li>
                <li onDoubleClick={() => handleAppOpen("myworks")}>
                    <Image
                        src={"/computer.ico"}
                        alt="retro icon of an computer"
                        width={"50rem"}
                        height={"50rem"}
                    />
                    <span>projects</span>
                </li>
                <li onDoubleClick={() => handleAppOpen("contact")}>
                    <Image
                        src={"/Letter.ico"}
                        alt="retro icon of an computer"
                        width={"50rem"}
                        height={"50rem"}
                    />
                    <span>contact</span>
                </li>
                <li onDoubleClick={() => handleAppOpen("help")}>
                    <Image
                        src={"/Helppage.ico"}
                        alt="retro icon of an computer"
                        width={"50rem"}
                        height={"50rem"}
                    />
                    <span>help</span>
                </li>
            </ul>
        </div>
    );
};

export default DesktopIcons;
