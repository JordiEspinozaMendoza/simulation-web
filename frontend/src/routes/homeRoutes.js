import { lazy } from "react";
const HomeScreen = lazy(() => import("../views/HomeScreen"));
export const homeRoutes = [
  {
    path: "/",
    exact: true,
    component: HomeScreen,
    name: "HomeScreen"
  },
];
