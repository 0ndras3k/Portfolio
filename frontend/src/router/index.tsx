import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import Index from "../pages";
import About from "../pages/about";
import Contact from "../pages/contact";
import Projects from "../pages/projects";

const routes: RouteProps[] = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/contact",
    component: Contact,
  },
  /**
   * PHP redirects
   */
  {
    path: "/index.php",
    component: () => <Redirect to="/" />,
  },
  {
    path: "/about.php",
    component: () => <Redirect to="/about" />,
  },
  {
    path: "/projects.php",
    component: () => <Redirect to="/projects" />,
  },
  {
    path: "/contact.php",
    component: () => <Redirect to="/contact" />,
  },
];

export const OklapkaRouter = () => (
  <Router>
    <Switch>
      {routes.map((route, key) => (
        <Route exact key={key} {...route} />
      ))}
    </Switch>
  </Router>
);

export default OklapkaRouter;
