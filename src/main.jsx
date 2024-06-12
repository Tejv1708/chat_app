import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import UserListing from './chat/UserListing.jsx';
import UserChat from './components/userchats/UserChats.jsx';

const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />,

    // children: [ {
    //   path: '/chats',
    //   element: <UserChat />
    // } ]
  }, {
    path: "/chats",
    element: <UserChat />
  }
] )

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(

  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode >,
)
