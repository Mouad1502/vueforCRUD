import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Student from '../views/Student.vue'
import AddStudent from '../views/addStudent.vue'
import EditStudent from '../views/editStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/students',
      name:'students',
      component: Student
    },
    {
      path: '/students/:id/edit',
      name:'editStudent',
      component: EditStudent
    },
    {
      path:'/students/add',
      name:'addStudent',
      component: AddStudent
    }
  ]
})

export default router
