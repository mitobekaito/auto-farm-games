import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import App from "./App";
import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Documents";
import Secret from "./pages/Secret";
import NotFound from "./pages/NotFound";
import Janken from "./pages/JankenGame";
import Omikuji from "./pages/OmikujiGame";

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* ルート: /auto-farm-games => <App /> */}
        <Route path="/" element={<App />}>
          {/* /auto-farm-games (スラッグなし) */}
          <Route index element={<HeroSection />} />

          {/* サブページ */}
          <Route path="home" element={<Home />} />
          <Route path="janken" element={<Janken />} />
          <Route path="omikuji" element={<Omikuji />} />
          <Route path="about" element={<About />} />
          <Route path="docs" element={<Docs />} />
          <Route path="secret" element={<Secret />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
