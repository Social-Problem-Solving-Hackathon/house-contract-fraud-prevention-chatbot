import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import LoginPage from "./pages/Login/LoginPage";
import LawServicePage from "./pages/LawService/LawServicePage";
import CommunityPage from "./pages/Community/CommunityPage";
import PostPage from "./pages/Post/PostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/lawservice" element={<LawServicePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
