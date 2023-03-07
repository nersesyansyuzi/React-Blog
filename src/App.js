import './App.css';
import Home from "./Componenst/Home/Home"
import CreateBlog from "./Componenst/Create/CreateBlog"
import { Route, Routes } from "react-router-dom"
import Layout from './Componenst/Layout';
import BlogDetail from './Componenst/Detail/BlogDetail';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="React-Blog" element={<Home />} />
          <Route path="create" element={<CreateBlog />} />
          <Route path=":id" element={<BlogDetail/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;



