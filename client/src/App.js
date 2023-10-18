import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./screens/Layout";
import { Main } from "./screens/Main/Main";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Favorites } from "./screens/Favorites/Favorites";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
