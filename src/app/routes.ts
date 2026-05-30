import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { Leadership } from "./pages/Leadership";
import { Research } from "./pages/Research";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "about", Component: About },
      { path: "leadership", Component: Leadership },
      { path: "research", Component: Research },
      { path: "resume", Component: Resume },
      { path: "contact", Component: Contact },
    ],
  },
]);
