import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; 
import App from "./App.jsx";
import RecipeBox from "../components/RecipeBox/index.jsx";
import Content from "../components/Content/index.jsx";

// const router = createBrowserRouter([
//   {
//     element: <App />,
//     Children: [
//       { path: "/", element: <Content /> },
//       { path: "/your-recipe-box", element: <RecipeBox /> },
//     ],
//   },
//   { path: "*", element: <App /> },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
