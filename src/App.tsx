import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Header from "./components/pages/main/Header";
import SideBar from "./components/pages/main/SideBar";
import Main from "./components/pages/main/main";
import InfiniteScroll from "./components/pages/InfiniteScroll";
import InininiteScrollObserver from "./components/pages/InfiniteScroll/InfiniteScrollWithIntersectionObserver";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Gallery from "./components/pages/gallery";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./assets/theme";
import Console from "./components/pages/Console";
import InfiniteScrollReactQuery from "./components/pages/InfiniteScroll/InfiniteScrollReactQuery";
import ListPage from "./components/pages/ListPage";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

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
      {
        path: "infinite-react-query",
        element: <InfiniteScrollReactQuery />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "console",
        element: <Console />,
      },
      {
        path: "pagination",
        element: <ListPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
