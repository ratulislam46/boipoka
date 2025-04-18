import React from 'react';
import { createBrowserRouter, } from 'react-router'
import Roots from '../Pages/Root/Roots';
import Error from '../Pages/Error/Error'
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';


export const router = createBrowserRouter([
    {
        path: '/',
        Component : Roots,
        errorElement: <Error></Error>,
        children : [
            { 
                index: true,
                path: '/',
                loader: () => fetch('books.json'),
                Component : Home 
            },
            {
                path: '/about',
                Component : About
            },
            {
                path: 'readlist',
                loader: ()=> fetch('./books.json'),
                Component : ReadList
            },
            {
                path: 'bookDetails/:Id',
                loader: ()=> fetch('./books.json'),
                Component : BookDetails
            }
        ]
    }
]);