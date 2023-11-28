import Articles from '../Pages/Articles/Articles';
import Courses from '../Pages/Courses/Courses'
import Infos from '../Pages/Infos/Infos'
import Users from '../Pages/Users/Users'

const router = [
    { path: '/', element: <Users /> },
    { path: '/users', element: <Users /> },
    { path: '/articles', element: <Articles /> },
    { path: '/courses', element: <Courses /> },
    { path: '/infos', element: <Infos /> },
]

export default router