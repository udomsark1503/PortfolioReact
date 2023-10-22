import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./components/MyPage";
const App = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MyPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;