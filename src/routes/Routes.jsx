import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import BookDetails from "../pages/book details/BookDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: '/',
                loader: ()=> fetch('booksData.json'),
                Component: Home,
            },
            {
                path: '/about',
                Component: About,
            },
            {
                path: 'bookDetails/:id',
                loader: ()=> fetch('/booksData.json'),
                Component: BookDetails
            }
        ]
    }
])

export default router;