import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // 首頁尚未添加，預先導向下一頁
    redirect: '/missionHome',
    component: home
  },
  {
    path: "/missionHome",
    name: "missionHome",
    component: () => import("@/views/missionHome.vue")
  },
  {
    path: "/missionInstruction",
    name: "missionInstruction",
    component: () => import("@/views/missionInstruction.vue")
  },
  {
    path: "/missionLevel",
    name: "missionLevel",
    component: () => import("@/views/missionLevel.vue")
  },
  {
    path: "/missionStart",
    name: "missionStart",
    component: () => import("@/views/missionStart.vue")
  },
  {
    path: "/missionComplete",
    name: "missionComplete",
    component: () => import("@/views/missionComplete.vue")
  },
  {
    path: "/missionShallow",
    name: "missionShallow",
    component: () => import("@/views/missionShallow.vue"),
    children: [
      {
        path: "rollcall",
        name: "rollcall",
        component: () => import("@/views/rollcall/rollcall.vue")
      },
      {
        path: "quiz",
        name: "quiz",
        component: () => import("@/views/quiz/quiz.vue")
      },
      {
        path: "grade",
        name: "grade",
        component: () => import("@/views/grade.vue")
      },
      {
        path: "course",
        name: "course",
        component: () => import("@/views/course/course.vue")
      },
      {
        path: "privateMessage",
        name: "privateMessage",
        component: () => import("@/views/privateMessage.vue")
      },
      {
        path: "publicMessage",
        name: "publicMessage",
        component: () => import("@/views/publicMessage.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
