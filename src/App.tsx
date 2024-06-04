import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Header from "./components/pages/main/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Fragment>
        <Header />
      </Fragment>
    ),
    errorElement: <h1>Oops, This is Error page !</h1>,
    children: [
      {
        path: "first",
        element: <h1>This is first page.</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
