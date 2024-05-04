import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";

const AppLayout = () => {
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);