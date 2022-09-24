import { Module } from "vuex";
import { UserState, RootState } from "../typing";

// 动态 Menu
import { AsyncBaseRoute } from "/@/router/type";
import { RouteRecordRaw } from "vue-router";

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    userInfo: {},
    userMenu: [
      {
        path: "/login",
        component: () => import("/@/page/login/index.vue"),
        meta: {
          title: "User Login",
          keepAlive: false,
        },
      },
    ],
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setUserMenu(state, payload: RouteRecordRaw[]) {
      state.userMenu = payload;
      // 存储 数据
      // storage.set("UserMenu", payload);
    },
  },
  actions: {
    async GetUserInfo({ commit }) {
      await commit("setUserInfo", {});
    },
    async GetUserMenu({ commit }) {
      await commit("setUserMenu", {});
    },
  },
};
