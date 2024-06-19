import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Header from "./components/pages/main/Header";
import SideBar from "./components/pages/main/SideBar";
import First from "./components/pages/first";
import Second from "./components/pages/second";
import Main from "./components/pages/main/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Fragment>
        <Header />
        <SideBar />
        <Main />
      </Fragment>
    ),
    errorElement: <h1>Oops, This is Error page !</h1>,
    children: [
      {
        path: "first",
        element: <First />,
      },
      {
        path: "second",
        element: <Second />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
