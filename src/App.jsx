import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Achievements from "./Pages/Achievements";
import Navbar from "./Components/Navbar";

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
        path: "/achievements",
        element: <Achievements />,
      },
    ],
    {
      basename: "/",
    }
  );
  return <RouterProvider router={router} />;
};

export default App;
