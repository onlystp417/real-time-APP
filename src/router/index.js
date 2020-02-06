import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import missionHome from '../views/missionHome.vue'
import missionInstructionOne from '../views/missionInstruction-one.vue'
import missionInstructionTwo from '../views/missionInstruction-two.vue'
import missionInstructionThree from '../views/missionInstruction-three.vue'
import missionInstructionFour from '../views/missionInstruction-four.vue'
import missionLevel from '../views/missionLevel.vue'
import missionStart from '../views/missionStart.vue'
import rollcall from '../views/rollcall.vue'
import grade from '../views/grade.vue'
import course from '../views/course.vue'
import quiz from '../views/quiz.vue'
import privateMessage from '../views/privateMessage.vue'
import publicMessage from '../views/publicMessage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/missionHome',
    name: 'missionHomet',
    component: () => import('../views/missionHome.vue')
  },
  {
    path: '/missionInstruction-one',
    name: 'missionInstruction-one',
    component: () => import('../views/missionInstruction-one.vue')
  },
  {
    path: '/missionInstruction-two',
    name: 'missionInstruction-two',
    component: () => import('../views/missionInstruction-two.vue')
  },
  {
    path: '/missionInstruction-three',
    name: 'missionInstruction-three',
    component: () => import('../views/missionInstruction-three.vue')
  },
  {
    path: '/missionInstruction-four',
    name: 'missionInstruction-four',
    component: () => import('../views/missionInstruction-four.vue')
  },
  {
    path: '/missionLevel',
    name: 'missionLevel',
    component: () => import('../views/missionLevel.vue')
  },
  {
    path: '/missionStart',
    name: 'missionStart',
    component: () => import('../views/missionStart.vue')
  },
  {
    path: '/rollcall',
    name: 'rollcall',
    component: () => import('../views/rollcall.vue')
  },
  {
    path: '/grade',
    name: 'grade',
    component: () => import('../views/grade.vue')
  },
  {
    path: '/course',
    name: 'course',
    component: () => import('../views/course.vue')
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('../views/quiz.vue')
  },
  {
    path: '/privateMessage',
    name: 'privateMessage',
    component: () => import('../views/privateMessage.vue')
  },
  {
    path: '/publicMessage',
    name: 'publicMessage',
    component: () => import('../views/publicMessage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
