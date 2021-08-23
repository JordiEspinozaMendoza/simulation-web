import { lazy } from "react";
const GeneratorView = lazy(() => import("../views/GeneratorView")),
  SmirnovView = lazy(() => import("../views/SmirnovView"));
export const exercisesRoutes = [
  {
    path: "/exercises/generator",
    exact: true,
    component: GeneratorView,
    name: "Generator",
  },
  {
    path: "/exercises/tests/smirnov",
    exact: true,
    component: SmirnovView,
    name: "SmirnovTest",
  },
];
