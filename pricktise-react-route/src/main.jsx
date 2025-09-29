import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./COmponend/Root/Root";
import HomePage from "./COmponend/HomePage/HomePage";
import Languages from "./COmponend/Languages/Languages";
import ListReact from "./COmponend/ListReact/ListReact";
import ClassRoom from "./COmponend/ClassRoom/ClassRoom";
import Users from "./COmponend/Users/Users";
import Post from "./COmponend/Post/Post";
import UserDetiles from "./COmponend/UserDetiles/UserDetiles";
import PostDetlies from "./COmponend/PostDetlise/PostDetlies";
import Command from "./COmponend/Command/Command";
import CommandDetlise from "./COmponend/CommandDetlise/CommandDetlise";
const postes = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "languages", element: <Languages></Languages> },
      { path: "react", element: <ListReact></ListReact> },
      { path: "room", element: <ClassRoom></ClassRoom> },
      // Data Lode For React Routing use loder way-> 1
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
       path:"singleUser/:singleUserId",
       loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.singleUserId}`),
       element:<UserDetiles></UserDetiles>
      },
      // Data Lode For Normal Featch and Then use  way-> 2
      {
        path: "post2",
        element: (
          <Suspense fallback={<h1>Post Loding....</h1>}>
            <Post postes={postes}></Post>
          </Suspense>
        ),
      },
      {
       path:"post",
       loader:() => fetch("https://jsonplaceholder.typicode.com/posts"),
       element:<Post></Post>
      },
      {
        path:"postDetlis/:postDetlisId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postDetlisId}`) ,
        element:<PostDetlies></PostDetlies>
      },

      {
        path:"commands",
        loader:() => fetch("https://jsonplaceholder.typicode.com/comments"),
        element:<Command></Command>
      },
      {
        path:"command/:commandId",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commandId}`) ,
        element:<CommandDetlise></CommandDetlise>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
