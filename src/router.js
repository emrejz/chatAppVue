import Home from "../src/pages/home";
export default {
  mode: "history",
  routes: [
    { path: "/", component: Home, name: "Home", matched: "fullPath" },
    { path: "*", redirect: { name: "Home" } }
  ]
};
