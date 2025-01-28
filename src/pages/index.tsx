import { lazy } from "react";
const DashBoard = lazy(() => import("./Dashboard"));
const Home = lazy(() => import("./Home"));
export { DashBoard, Home };
