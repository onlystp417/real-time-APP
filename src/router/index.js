import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import missionHome from '../views/missionHome.vue'
import missionInstruction from '../views/missionInstruction.vue'
import missionLevel from '../views/missionLevel.vue'
import missionStart from '../views/missionStart.vue'
import missionComplete from '../views/missionComplete.vue'
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
    component: home
  },
  {
    path: '/missionHome',
    name: 'missionHome',
    component: missionHome
  },
  {
    path: '/missionInstruction',
    name: 'missionInstruction',
    component: missionInstruction
  },
  {
    path: '/missionLevel',
    name: 'missionLevel',
    component: missionLevel
  },
  {
    path: '/missionStart',
    name: 'missionStart',
    component: missionStart
  },
  {
    path: '/missionComplete',
    name: 'missionComplete',
    component: missionComplete
  },
  {
    path: '/rollcall',
    name: 'rollcall',
    component: rollcall
  },
  {
    path: '/grade',
    name: 'grade',
    component: grade
  },
  {
    path: '/course',
    name: 'course',
    component: course
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: quiz
  },
  {
    path: '/privateMessage',
    name: 'privateMessage',
    component: privateMessage
  },
  {
    path: '/publicMessage',
    name: 'publicMessage',
    component: publicMessage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
