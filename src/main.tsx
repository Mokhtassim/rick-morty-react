import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CharacterList, Favorites, CharacterDetail } from "./pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
