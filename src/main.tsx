import "./index.css";
import ReactDOM from "react-dom/client";
import {router} from "./routes/router";
import { RouterProvider } from "react-router/dom";

const root = document.getElementById("root");
// Je mets le 'if' a cause de TS qui m'impose le typage de root, mais je sais que root ne sera jamais null car il est dans mon index.html
if (!root) {
  throw new Error("Element #root was not found");
}
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);