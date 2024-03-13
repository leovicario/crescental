import * as React from "react";
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import ArticleBody from './components/articles/ArticleBody.jsx'
import ErrorPage from './pages/404.jsx'
import '/src/index.css'

import {NextUIProvider } from "@nextui-org/react";

import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/post/:slug",
    element: <ArticleBody />
  }
]);



const App = () => {

  // const navigate = useNavigate();

  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;