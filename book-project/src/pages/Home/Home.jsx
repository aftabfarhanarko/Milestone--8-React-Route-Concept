import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Book/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const promiseData = useLoaderData();
    

    return (
        <div>
            <Banner></Banner>
            <Books promiseData={promiseData}></Books>
        </div>
    );
};

export default Home;