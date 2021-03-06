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
    component: home
  },
  {
    path: '/missionHome',
    name: 'missionHomet',
    component: missionHome
  },
  {
    path: '/missionInstruction-one',
    name: 'missionInstruction-one',
    component: missionInstructionOne
  },
  {
    path: '/missionInstruction-two',
    name: 'missionInstruction-two',
    component: missionInstructionTwo
  },
  {
    path: '/missionInstruction-three',
    name: 'missionInstruction-three',
    component: missionInstructionThree
  },
  {
    path: '/missionInstruction-four',
    name: 'missionInstruction-four',
    component: missionInstructionFour
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
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
