import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Header from "./components/pages/main/Header";
import SideBar from "./components/pages/main/SideBar";
import Main from "./components/pages/main/main";
import InfiniteScroll from "./components/pages/InfiniteScroll";
import InininiteScrollObserver from "./components/pages/InfiniteScroll/InfiniteScrollWithIntersectionObserver";

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
        path: "infinite",
        element: <InfiniteScroll />,
      },
      {
        path: "infinite-observer",
        element: <InininiteScrollObserver />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
