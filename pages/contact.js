import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from '../styles/contact.module.css'

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Page</title>
            </Head>
            <Navbar></Navbar>
            <h1 className={styles.mainHeading}>This is my contact</h1>
        </>
    );
};

export default Contact;