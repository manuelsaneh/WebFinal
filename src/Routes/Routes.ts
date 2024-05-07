import { RouteProps } from "react-router-dom";
import CuisinePage from "../pages/CuisinePage/CuisinePage";
import HomePage from "../pages/HomePage/HomePage";
import NewsPage from "../pages/NewsPage/NewsPage";
import RecipesPage from "../pages/RecipesPage/RecipesPage";
import SearchedPage from "../pages/SearchedPage/SearchedPage";

interface Route {
  path: string;
  element: React.ComponentType<RouteProps>;
}

export const routes: Route[] = [
  {
    path: "/home",
    element: HomePage,
  },
  {
    path: "/recipe/:name",
    element: RecipesPage,
  },
  {
    path: "/cuisine/:type",
    element: CuisinePage,
  },
  {
    path: "/searched/:search",
    element: SearchedPage,
  },
  {
    path: "/news",
    element: NewsPage,
  },
];
