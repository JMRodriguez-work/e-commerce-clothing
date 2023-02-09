import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home, Product, Products } from "./pages/index";
import { NavBar, Footer } from "./components/index";

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />{" "}
      {/*Represents different pages, so it always has the Navbar and Footer */}
      <Footer />
    </div>
  );
};

function App() {
  //Creating different routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Products />
        },
        {
          path: "/product/:id",
          element: <Product />
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
