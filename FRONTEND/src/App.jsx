import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./SECTIONS/Login";
import Home from "./pages/Home";


const routes = [
  { path: "/", element: <Home /> },
  {path: "/login", element: <Login />},
];

const App = () => {
  const element = useRoutes(routes);

  return (
    <div>
      <main className="pt-16">
        {element}
      </main>
    </div>
  );
};

export default App;
