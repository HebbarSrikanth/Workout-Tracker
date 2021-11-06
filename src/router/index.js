import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import ViewWorkot from "../views/ViewWorkout.vue";
import Create from "../views/Create.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Singup",
    component: Register,
  },
  {
    path: "/login",
    name: "LogIn",
    component: Login,
  },
  {
    path: "/view/:workoutId?",
    name: "View",
    component: ViewWorkot,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change document titles

// Route guard for auth routes

export default router;
