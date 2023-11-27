import Articles from '../Pages/Articles';
import Courses from '../Pages/Courses'
import Infos from '../Pages/Infos'
import Users from '../Pages/Users/Users'

const router = [
    { path: '/', element: <Users /> },
    { path: '/users', element: <Users /> },
    { path: '/articles', element: <Articles /> },
    { path: '/courses', element: <Courses /> },
    { path: '/infos', element: <Infos /> },
]

export default router