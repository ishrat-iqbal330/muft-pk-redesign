import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";

import Company from "./Pages/Company";
import SuccessStories from "./Pages/SuccessStories";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/successstories",
        element: <SuccessStories />,
      },
      {
        path: "/company",
        element: <Company />,
      },
    ],
    {
      basename: "/",
    }
  );
  return <RouterProvider router={router} />;
};

export default App;
