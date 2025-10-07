import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Componend/Root/Root.jsx'
import ProgramingLanguages from './Componend/ProgramingLanguages/ProgramingLanguages.jsx'
import Home from './Componend/Home/Home.jsx'
import Users from './Users/Users.jsx'
import UserDetlise from './UserDetlies/UserDetlise.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      { index: true, Component: Home },
      { path: "languages", Component: ProgramingLanguages },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetlise
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
