import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Main from "./page/Main/Main";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Page404 from "./page/NotFound/page404";
import Store from "./page/Store/Store";
import Detail from "./page/Detail/Detail";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Main />} />
          <Route path="store" element={<Store />} />
          <Route path="product" element={<Detail />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
