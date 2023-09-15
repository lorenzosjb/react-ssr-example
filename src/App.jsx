import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About } from "./pages/About";
import { Articles } from "./pages/Articles";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { ErrorPage } from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Server-Side Rendering Example</h1>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="articles" element={<Articles />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;