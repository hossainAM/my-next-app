import React from 'react';
import Navbar from '../../components/Navbar';

//get paths
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    const paths = data.map(currElement => {
        return {
            params: {
                pageNo: currElement.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

//get details
export const getStaticProps = async (context) => {
    const id = context.params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};

const MyData = ({data}) => {
    const { id, title, body } = data;
    return (
        <>
           <Navbar></Navbar>
           <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-6 mx-auto mb-4">
                <div className="card-body">
                    <h2 className="card-title text-accent font-bold">{id}</h2>
                    <h2 className="font-base text-primary">{title}</h2>
                    <p className="font-base text-neutral">{body}</p>
                </div>
           </div> 
        </>
    );
};

export default MyData;