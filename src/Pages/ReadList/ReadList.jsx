import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { storeBook } from '../Utility/AddToDB';
import { useLoaderData } from 'react-router';
import BookDetails from '../BookDetails/BookDetails';
import Book from '../Book/Book';

const ReadList = () => {

    const [readlist, setReadlist] = useState([]);

    const [shot, setShot] = useState("");

    const data = useLoaderData();
    console.log(data);


    useEffect(() => {
        const storeBookData = storeBook();
        const convertStoreBooks = storeBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertStoreBooks.includes(book.bookId));
        setReadlist(myReadList)
    }, []);

    const handleSort = (type) => {
        setShot(type)

        if (type === "pages") {
            const sortedByPage = [...readlist]. shot((a, b) => a.totalPages - b.totalPages);
            setReadlist(sortedByPage)
        }
        else if (type === "ratings") {
            const sortedByrating = [...readlist].shot((a, b) => a.rating - b.rating);
            setReadlist(sortedByrating)
        }
    }

    return (
        <div className='mt-6'>
            <details className="dropdown">
                <summary className="btn m-1">sort by : {shot?shot:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=> handleSort("pages")}>Pages</a></li>
                    <li><a onClick={()=> handleSort("rating")}>Ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read {readlist.length}</h2>
                    {
                        readlist.map(b=><Book key={b.bookId} singleBook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Wish list ......</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;