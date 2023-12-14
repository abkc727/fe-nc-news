import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { ArticlesContainer } from "./components/ArticlesContainer";
import { ArticlePage } from "./components/ArticlePage";
import { TopicsContainer } from "./components/TopicsContainer";
import { TopicPage } from "./components/TopicPage";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesContainer />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
        <Route path="/topics" element={<TopicsContainer />} />
        <Route path="/articles/:topic" element={<TopicPage />} />
      </Routes>
    </>
  );
}

export default App;

