import { BrowserRouter, Route, Routes } from "react-router";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard">
          <Route index element={<Home />} />
        </Route>

        <Route path="/budget">
          <Route index element={<>budget</>} />
        </Route>

        <Route path="/add">
          <Route index element={<>Add</>} />
        </Route>

        <Route path="/advices">
          <Route index element={<>advices</>} />
        </Route>

        <Route path="/more">
          <Route index element={<>more</>} />
        </Route>

        {/*<Route path="/*" element={<ErrorPage />} />*/}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
