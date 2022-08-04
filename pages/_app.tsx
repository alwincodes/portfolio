import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* <!-- Primary Meta Tags --> */}
                <title>Alwin Mathew</title>
                <meta name="title" content="Alwin Mathew" />
                <meta
                    name="description"
                    content="Hello, I'm Alwin Mathew a full-stack web developer and a computer science enthusiast. Welcome to my portfolio!"
                />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.alwinmathew.xyz/"
                />
                <meta property="og:title" content="Alwin Mathew" />
                <meta
                    property="og:description"
                    content="Hello, I'm Alwin Mathew a full-stack web developer and a computer science enthusiast. Welcome to my portfolio!"
                />
                <meta
                    property="og:image"
                    content="https://www.alwinmathew.xyz/profile.jpg"
                />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.alwinmathew.xyz/"
                />
                <meta property="twitter:title" content="Alwin Mathew" />
                <meta
                    property="twitter:description"
                    content="Hello, I'm Alwin Mathew a full-stack web developer and a computer science enthusiast. Welcome to my portfolio!"
                />
                <meta
                    property="twitter:image"
                    content="https://www.alwinmathew.xyz/profile.jpg"
                ></meta>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
