import { createBrowserRouter } from "react-router-dom";
import MentionLegale from "../pages/MentionLegale.jsx";
import DetailsPokemon from "../pages/DetailsPokemon.jsx";
import HomePage from "../pages/HomePage.jsx";
import App from "../../App.jsx";
import ErrorPage from "../pages/404.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/mentionlegale",
        element: <MentionLegale />
      },
      {
        path: "/pokemon/:id",
        element: <DetailsPokemon />
      }
    ]
  }
]);

export default router;