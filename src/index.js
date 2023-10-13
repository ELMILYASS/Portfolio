import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Loading from "./components/Loading";
const LazyApp = React.lazy(() => import("./App"));
const LoadingScreen = () => {
  return <Loading />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <LazyApp />
    </Suspense>
  </React.StrictMode>
);
