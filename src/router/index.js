import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import ViewWorkot from "../views/ViewWorkout.vue";
import Create from "../views/Create.vue";
import { supabase } from "../supabase";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: false,
    },
  },
  {
    path: "/register",
    name: "Singup",
    component: Register,
    meta: {
      auth: false,
    },
  },
  {
    path: "/login",
    name: "LogIn",
    component: Login,
    meta: {
      auth: false,
    },
  },
  {
    path: "/view/:workoutId?",
    name: "View",
    component: ViewWorkot,
    meta: {
      auth: false,
    },
  },
  {
    path: "/create",
    name: "create",
    component: Create,
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change document titles
router.beforeEach((to, from, next) => {
  document.title = `${to.name} | Active-Tracker`;
  next();
});

// Route guard for auth routes

router.beforeEach((to, from, next) => {
  const user = supabase.auth.user();
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next();
      return;
    } else {
      router.push("/login");
    }
  }
  next();
});

export default router;
