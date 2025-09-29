import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./COmponend/Root/Root";
import HomePage from "./COmponend/HomePage/HomePage";
import Languages from "./COmponend/Languages/Languages";
import ListReact from "./COmponend/ListReact/ListReact";
import ClassRoom from "./COmponend/ClassRoom/ClassRoom";
import Users from "./COmponend/Users/Users";
import Post from "./COmponend/Post/Post";
const postes = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "languages", element: <Languages></Languages> },
      { path: "react", element: <ListReact></ListReact> },
      { path: "room", element: <ClassRoom></ClassRoom> },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },

      {
        path: "post",
        element: (
          <Suspense fallback={<h1>Post Loding....</h1>}>
            <Post postes={postes}></Post>
          </Suspense>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
