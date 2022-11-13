
import './App.css';
import Home from "./Componenst/Home/Home"
import { useContext, useState } from "react";
import Menu from "./Componenst/Menu/Menu"
import { MyContext } from "./Componenst/Context/Context"
import CreateBlog from "./Componenst/Create/CreateBlog"
import { Route, Routes } from "react-router-dom"
import Layout from './Componenst/Layout';
import BlogDetail from './Componenst/Detail/BlogDetail';

function App() {
  const { blog: { showMenu }, dispatch } = useContext(MyContext)
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<CreateBlog />} />
          <Route path=":id" element={<BlogDetail/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;



