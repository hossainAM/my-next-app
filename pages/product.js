import Head from "next/head";
import Navbar from "../components/Navbar";

const product = () => {
    return (
        <>
            <Head>
                <title>Product Page</title>
            </Head>
            <Navbar></Navbar>
            {/* <h1 className="text-xl font-bold text-center mt-5">This is my product</h1> */}
            <h1>This is my product</h1>
            <p className="order">Place your order</p>

            {/* styled jsx */}
            <style jsx>
                {`
                    h1 {
                        color: green;
                        font-size: xx-large;
                        font-weight: bold;
                        text-align: center;
                        margin-top: 2rem;
                    },
                    .order {
                        color: pink;
                        font-size: large;
                        font-weight: bold;
                        text-align: center;
                        margin-top: 2rem;
                    }
                `}
            </style>
        </>
    );
};

export default product;