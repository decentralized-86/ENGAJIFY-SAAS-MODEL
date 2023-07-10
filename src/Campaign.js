import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Rendercard from "./components/Cards - Section/Rendercard";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <div className="sidebar__custom">
        <Sidebar />
      </div>
      <div className="renderCard__container">
        <Rendercard />
      </div>
    </>
  );
}
