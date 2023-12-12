import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { ArticlesContainer } from "./components/ArticlesContainer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesContainer />} />
      </Routes>
    </>
  );
}

export default App;
