import { lazy } from "react";
const GeneratorView = lazy(() => import("../views/GeneratorView")),
  SmirnovView = lazy(() => import("../views/SmirnovView")),
  FrequencyView = lazy(() => import("../views/FrequencyView"));
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
  {
    path: "/exercises/tests/frequency",
    exact: true,
    component: FrequencyView,
    name: "FrequencyView",
  },
];
