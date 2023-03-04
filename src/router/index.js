import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TermPage from "@/components/termPage/TermPage.vue";
import CoursePage from "@/components/coursePage/CoursePage.vue";

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
      path: "/coursepage/:coursenum",
      name: "coursepage",
      component: CoursePage,
    },
  ],
});

export default router;
