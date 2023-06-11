import ContentPage from "@/ContentPage";

import NewsApp from "./NewsApp";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ContentPage,
    },
    {
      path: "/news",
      component: NewsApp,
    },
  ],
});

export default router;
