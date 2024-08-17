import * as React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homeroute from "./Component/Homepage/Homeroute";
import Privacy from "./Component/Privacy/Privacy";
import TermsCondition from "./Component/Terms&Conditions/Terms&Conditons";
import DeleteAccount from "./Component/DeleteAccount/Deleteaccount";
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
  {
    path: "delete-account",
    element: <DeleteAccount />,
  }, 
]);

const Approute = () => {
  return <RouterProvider router={router} />;
};

export default Approute;
