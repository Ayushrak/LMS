import React from 'react'
import { Button } from './components/ui/button'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import HeroSection from './pages/student/HeroSection'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { RouterProvider } from 'react-router'
import Courses from './pages/student/Courses'
import MyLearning from './pages/student/MyLearning'
import Profile from './pages/student/Profile'
import SideBar from './pages/admin/SideBar'
import Course from './pages/student/Course'
import Dashboard from './pages/admin/Dashboard'
import CourseTable from './pages/admin/course/CourseTable'
import AddCourse from './pages/admin/course/AddCourse'
import EditCourse from './pages/admin/course/EditCourse'
import CreateLecture from './pages/admin/lecture/CreateLecture'
import EditLecture from './pages/admin/lecture/EditLecture'



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
     {
      path:"/",
      element:(
        <>
        <HeroSection/>
        <Courses/>
        </>
      )
     },
     {
      path:"login",
      element:<Login/>
     },
     {
      path:"my-learning",
      element:<MyLearning/>
     },
     {
      path:"profile",
      element:<Profile />
     },
     //admin routes start from here 
     {
      path:"admin",
      element:<SideBar />,
      children:[
        {
          path:"dashboard",
          element:<Dashboard/>
        },
        {
          path:"course",
          element:<CourseTable/>
        },
        {
          path:"course/create",
          element:<AddCourse/>
        },
        {
          path: "course/:courseId",
          element: <EditCourse />,
        },
        {
          path: "course/:courseId/lecture",
          element: <CreateLecture />,
        },
        {
          path:"course/:courseId/lecture/:lectureId",
          element:<EditLecture/>
        }
      ]
     }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App