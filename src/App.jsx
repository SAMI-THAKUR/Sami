import Layout from "./layout/layout.jsx";
import useTheme, { ThemeContext, ThemeProvider } from "./context/useTheme";
import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Project_List, Project_Detail } from "./widgets/index.js";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="project" element={<Project_List />} />
      <Route path="project/:id/:pid" element={<Project_Detail />} />
      {/* <Route path="contact" element={<Contact />} /> */}
    </Route>
  )
);

function App() {
  const [theme, setTheme] = useState("dark");
  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <RouterProvider router={route} />
    </ThemeProvider>
  );
}

export default App;
