
import "./index.css";
import {useEffect } from "react";

import router from "./router/index.tsx";
import { Toaster } from "sonner";
import { RouterProvider } from "react-router-dom";
const App = () => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message = "Your cart will be emptied if you leave this page.";
      event.preventDefault();
      event.returnValue = message; // Required for some browsers
      return message; // For other browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
