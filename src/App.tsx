import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./page/Main/Main";
import About from "./page/About/About";
import Project from "./page/Project/Project";
import Tech from "./page/Tech/Tech";
import Contact from "./page/Contact/Contact";
import ProjectDetail from "./page/Project/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="tech" element={<Tech />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
