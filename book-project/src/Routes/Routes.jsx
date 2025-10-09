import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetlise from "../pages/BookDetlise/BookDetlise";
import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "/bookDetlise/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetlise,
      },
      {
        path: "readList",
        loader: () => fetch("/booksData.json"),

        Component: ReadList,
      },
    ],
  },
]);
