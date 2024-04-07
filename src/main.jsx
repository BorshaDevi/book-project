import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import ListedBook from './Components/ListedBook/ListedBook';
import Pages from './Components/Pages/Pages';
import MoreBooks from './Components/MoreBooks/MoreBooks';
import Search from './Components/Search/Search';
import Books from './Components/Books/Books';
import Details from './Components/Details/Details';
import {  HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/listed',
        element:<ListedBook></ListedBook>
      },
      {
        path:'/pages',
        element:<Pages></Pages>
      },
      {
        path:'/more',
        element:<MoreBooks></MoreBooks>
      },
      {
        path:'/search',
        element:<Search></Search>
      },
      {
       path:'/detail/:detailId',
       element:<Details></Details>,
       loader:() => fetch('book.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

    <RouterProvider router={router} />
    </HelmetProvider>
     
  </React.StrictMode>,
)
