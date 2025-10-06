import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getLSData } from "../../utils/LS";
import Book from "../book/Book";

const Read = () => {
    const allBooks = useLoaderData();
    const [read, setRead] = useState([]);
    
    useEffect(()=> {
        const LSData = getLSData();
        const idNum = LSData.map(id => Number(id));
        const readBook = allBooks.filter(book => idNum.includes(book.bookId));
        setRead(readBook);
    }, [allBooks]);

    return (
        <div className="w-11/12 mx-auto py-15">
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
