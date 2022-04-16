import type { NextPage } from "next";

import Desktop from "../components/Desktop";
import styles from "../styles/General.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Desktop />
        </div>
    );
};

// const getServerSideProps = async () => {
//     const data = "hello from server";

//     // Pass data to the page via props
//     return { props: { data } };
// };

// export { getServerSideProps };
export default Home;
