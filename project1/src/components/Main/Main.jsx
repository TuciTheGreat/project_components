import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content/Content";

const Main = ({ recipes }) => (
  <main>
    <Sidebar />
    <Content recipes={recipes} />
  </main>
);

export default Main;
