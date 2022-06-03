import { useEffect } from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import Navbar from '../components/Navbar';

const ErrorPage = () => {
    const router = useRouter();

    //Auto redirect after few seconds
    useEffect(() => {
        setTimeout(() => {
             router.push('/home')
        }, 3000)
    }, [])

    return (
        <>
        <Navbar></Navbar>
        <div className='flex flex-col justify-center items-center h-screen space-y-4'>
            <div>
                <h1 className='text-7xl'>404</h1>
            </div>
            <h2 className='text-3xl font-bold uppercase'>We are sorry, Page not found!</h2>
            <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable</p>
            <Link href="/home"><a className='btn btn-link'>Back to Homepage</a></Link>
            {/* <a className='btn btn-accent' onClick={() => router.push('/home')}>Back to Homepage</a> */}
        </div>
        </>
    );
};

export default ErrorPage;