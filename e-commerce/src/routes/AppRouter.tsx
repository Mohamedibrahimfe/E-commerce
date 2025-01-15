import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "@layouts/main_layout/MainLayout";
// pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import Products from "@pages/Products";
import AboutUs from "@pages/About";
import Login from "@pages/Login";
import Register from "@pages/Register";
import NotFound from "@pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Products Page not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
