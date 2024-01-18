import React from "react";
import Nav from "./header/nav/Nav";
import CopyRight from "./footer/CopyRight";
import TodoList from "./main/todolist/TodoList";
import Layout from "./layout/Layout";

export const MainPage = () => {
  return (
    <>
      <Layout>
        <Nav />
        <TodoList />
        <CopyRight />
      </Layout>
    </>
  );
};

export default MainPage;
