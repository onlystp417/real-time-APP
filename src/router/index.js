import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
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
    path: "/missionCompleteText",
    name: "missionCompleteText",
    component: () => import("@/views/missionCompleteText.vue")
  },
  {
    path: "/missionShallow",
    name: "missionShallow",
    component: () => import("@/views/missionShallow.vue"),
    children: [
      {
        path: "rollcall",
        name: "rollcall",
        component: () => import("@/views/shallow/rollcall.vue")
      },
      {
        path: "quiz",
        name: "quiz",
        component: () => import("@/views/shallow/quiz.vue")
      },
      {
        path: "grade",
        name: "grade",
        component: () => import("@/views/shallow/grade.vue")
      },
      {
        path: "course",
        name: "course",
        component: () => import("@/views/shallow/course.vue")
      },
      {
        path: "privateMessage",
        name: "privateMessage",
        component: () => import("@/views/shallow/privateMessage.vue")
      },
      {
        path: "publicMessage",
        name: "publicMessage",
        component: () => import("@/views/shallow/publicMessage.vue")
      }
    ]
  },
  {
    path: "/missionDeep",
    name: "missionDeep",
    component: () => import("@/views/missionDeep.vue"),
    children: [
      {
        path: "rollcallAndQuiz",
        name: "rollcallAndQuiz",
        component: () => import("@/views/deep/rollcallAndQuiz.vue")
      },
      {
        path: "gradeAndCourse",
        name: "gradeAndCourse",
        component: () => import("@/views/deep/gradeAndCourse.vue")
      },
      {
        path: "privateMessageAndPublicMessage",
        name: "privateMessageAndPublicMessage",
        component: () =>
          import("@/views/deep/privateMessageAndPublicMessage.vue")
      }
    ]
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;
