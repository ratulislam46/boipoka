import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

    const books = useLoaderData();
    // console.log(data);

    return (
        <div >
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;