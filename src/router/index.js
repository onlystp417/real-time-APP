import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import missionHome from "../views/missionHome.vue";
import missionInstruction from "../views/missionInstruction.vue";
import missionLevel from "../views/missionLevel.vue";
import missionStart from "../views/missionStart.vue";
import missionComplete from "../views/missionComplete.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: home
  // },
  // {
  //   path: '/missionHome',
  //   name: 'missionHome',
  //   component: missionHome
  // },
  // {
  //   path: '/missionInstruction',
  //   name: 'missionInstruction',
  //   component: missionInstruction
  // },
  // {
  //   path: '/missionLevel',
  //   name: 'missionLevel',
  //   component: missionLevel
  // },
  // {
  //   path: '/missionStart',
  //   name: 'missionStart',
  //   component: missionStart
  // },
  // {
  //   path: '/missionComplete',
  //   name: 'missionComplete',
  //   component: missionComplete
  // }
  // ,
  // {
  //   path: '/rollcall',
  //   name: 'rollcall',
  //   component: rollcall
  // },
  // {
  //   path: '/rollcallQuiz',
  //   name: 'rollcallQuiz',
  //   component: rollcallQuiz
  // },
  // {
  //   path: '/grade',
  //   name: 'grade',
  //   component: grade
  // },
  // {
  //   path: '/course',
  //   name: 'course',
  //   component: course
  // },
  // {
  //   path: '/quiz',
  //   name: 'quiz',
  //   component: quiz
  // },
  // {
  //   path: '/privateMessage',
  //   name: 'privateMessage',
  //   component: privateMessage
  // },
  // {
  //   path: '/publicMessage',
  //   name: 'publicMessage',
  //   component: publicMessage
  // }
  {
    path: "/",
    name: "home",
    redirect: '/missionHome',
    component: home
  },
  {
    path: "/missionHome",
    name: "missionHome",
    component: missionHome
  },
  {
    path: "/missionInstruction",
    name: "missionInstruction",
    component: missionInstruction
  },
  {
    path: "/missionLevel",
    name: "missionLevel",
    component: missionLevel
  },
  {
    path: "/missionStart",
    name: "missionStart",
    component: missionStart
  },
  {
    path: "/missionComplete",
    name: "missionComplete",
    component: missionComplete
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
