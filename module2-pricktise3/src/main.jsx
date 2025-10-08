// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Componend/Rooot/Root.jsx'
import Home from './Componend/Home/Home.jsx'
import Post from './Componend/Post/Post.jsx'
import PostDetlics from './Componend/PostDetlics/PostDetlics.jsx'
import Error from './Componend/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path:"post",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Post
      },
      {
        path:"post/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
        Component: PostDetlics,
      },
      {
        path:"*",
        Component:Error
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
