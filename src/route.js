import * as React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homeroute from "./Component/Homepage/Homeroute";
import Privacy from "./Component/Privacy/Privacy";
import TermsCondition from "./Component/Terms&Conditions/Terms&Conditons";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homeroute />,
  },
  {
    path: "Privacy-policy",
    element: <Privacy />,
  },
  {
    path: "Term & Conditon",
    element: <TermsCondition />,
  },
]);

const Approute = () => {
  return <RouterProvider router={router} />;
};

export default Approute;
