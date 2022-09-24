import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";

import { store } from "../store";
import Layout from "/@/layout/index.vue";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

const { VITE_WEB_HASH, VITE_APP_BASE_TITLE } = import.meta.env;

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    meta: {
      title: "Layout",
      keepAlive: true,
    },
  },
  {
    path: "/login",
    component: () => import("/@/page/login/index.vue"),
    meta: {
      title: "User Login",
      keepAlive: false,
    },
  },
  {
    path: "/404",
    component: () => import("/@/page/404/index.vue"),
    meta: {
      title: "Page Not Found",
      keepAlive: false,
    },
  },
  {
    path: "/405",
    component: () => import("/@/page/405/index.vue"),
    meta: {
      title: "Page Not Permission",
      keepAlive: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const hasToken = true;

// 路由前置守卫，实现 信息校验和 title 设置
const beforeRouter = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: Function
): void => {
  NProgress.start();

  if (to.meta.title) {
    document.title = VITE_APP_BASE_TITLE + " | " + to.meta.title;
  }

  const hasLoad = store.state.app.isLoad as boolean;
  if (hasLoad) {
    store.commit("app/setIsLoad", false);
    next({ ...to });
  } else {
    if (!hasToken && to.path !== "/login") {
      // 检测 登录
      next({
        path: "/login",
        query: {
          redirect: to.path,
        },
      });
    } else {
      if (to.matched.length == 0) {
        next({ path: "/404", query: { redirect: to.path } });
      } else {
        next();
      }
    }
  }
};

router.beforeEach(beforeRouter);

router.afterEach(() => {
  NProgress.done();
});
export default router;
