import Head from "next/head";
import Navbar from "../../components/Navbar";
import Link from 'next/link'

 export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
 };

const blog = ({data}) => {
    return (
        <>
            <Head>
                <title>Blog Page</title>
            </Head>
            <Navbar></Navbar>
            {
                data.slice(0, 5).map(currElement => <div key={currElement.id} className="card lg:max-w-lg bg-base-100 shadow-xl mt-6 mx-auto mb-4">
                                            <div className="card-body flex flex-row">
                                                <h2 className="card-title px-2 border-2 rounded-full bg-accent font-base text-sm">{currElement.id}</h2>
                                                <Link href={`/blog/${currElement.id}`}><h2 className="font-base text-neutral hover:text-accent cursor-pointer">{currElement.title}</h2></Link>
                                            </div>
                                        </div>)
            }      
        </>
    );
};

export default blog;