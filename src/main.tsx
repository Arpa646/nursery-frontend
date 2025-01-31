import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import { store } from "./redux/store.ts";

import App from "./App";
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Toaster position="top-center" />

//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
