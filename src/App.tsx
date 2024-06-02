import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello world!</h1>,
    errorElement: <h1>Oops, Error page !</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
