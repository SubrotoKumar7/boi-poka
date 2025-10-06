import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getLSData } from "../../utils/LS";
import Book from "../book/Book";

const Read = () => {
    const allBooks = useLoaderData();
    const [read, setRead] = useState([]);
    const [sort, setSort] = useState('');
    
    useEffect(()=> {
        const LSData = getLSData();
        const idNum = LSData.map(id => Number(id));
        const readBook = allBooks.filter(book => idNum.includes(book.bookId));
        setRead(readBook);
    }, [allBooks]);

    const handleSort = (type) => {
        setSort(type);

        if(type === 'Pages'){
            const sortByPage = [...read].sort((a,b) => a.totalPages - b.totalPages);
            setRead(sortByPage);
        }

        if(type === 'Rating'){
            const sortByRating = [...read].sort((a, b) => a.rating - b.rating);
            setRead(sortByRating);
        }
    }

    return (
        <div className="w-11/12 mx-auto py-15">
            <div className="dropdown dropdown-start mx-auto w-fit block my-2">
                <div tabIndex={0} role="button" className="btn m-1">Sort ⬇️ {sort ? sort : ""}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=> handleSort('Pages')}><a>Sort By Pages</a></li>
                    <li onClick={()=> handleSort('Rating')}><a>Sort By Ratings</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                <h2>All Read Book List</h2>
                </TabPanel>
                <TabPanel>
                <h2>All Wishlist Books</h2>
                </TabPanel>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-20">
                {
                    read.map(book => <Book key={book.bookId} singleBook={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Read;
