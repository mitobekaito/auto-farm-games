// src/routes.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Documents";
import NotFound from "./pages/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          親ルート: /auto-farm-games -> <App />
          <App/> 内の <Outlet/> で子ルートを表示
        */}
        <Route path="/auto-farm-games" element={<App />}>
          {/*
            index => /auto-farm-games (スラッグなし)
            ここで HeroSection を表示
          */}
          <Route index element={<HeroSection />} />

          {/*
            /auto-farm-games/home => Home
          */}
          <Route path="home" element={<Home />} />

          {/*
            /auto-farm-games/about => About
            /auto-farm-games/docs => Docs
          */}
          <Route path="about" element={<About />} />
          <Route path="docs" element={<Docs />} />

          {/*
            存在しないパス => NotFound 
          */}
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
