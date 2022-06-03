import Navbar from "../components/Navbar";
import styles from '../styles/about.module.css'
import Image from 'next/image'
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
            </Head>
            <Navbar></Navbar>
            <div className="text-center">
                <h1 className={styles.mainHeading}>This is my about page</h1>
                {/* <Image src="/image01.png" width="500" height="300" alt="image"/> */}
                <Image src = "https://i.ibb.co/VVJzrn9/image01.png"
                width = "500"
                height = "300"
                alt = "image"/>
            </div>
        </>
    );
};

export default About;