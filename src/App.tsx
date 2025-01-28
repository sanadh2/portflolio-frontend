import { Route, Routes } from "react-router";
import { Suspense } from "react";
import Loader from "./pages/Loader";
import { DashBoard, Home } from "./pages";
import "./App.css";
export default function App() {
  return (
    <div className="">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Routes>
      </Suspense>
    </div>
  );
}
