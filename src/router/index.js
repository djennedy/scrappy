import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TermPage from "@/components/termPage/TermPage.vue";
import CoursePage from "@/components/coursePage/CoursePage.vue";
import RequirementsPage from "@/components/requirementsPage/RequirementsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/termpage",
      name: "termpage",
      component: TermPage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/coursepage",
      name: "coursepage",
      component: CoursePage,
    },
    {
      path: "/requirements",
      name: "requirements",
      component: RequirementsPage,
    },
  ],
});

export default router;
