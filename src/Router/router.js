import Articles from '../Pages/Articles';
import Courses from '../Pages/Courses'
import Infos from '../Pages/Infos'
import Users from '../Pages/Users'

const router = [
    { path: '/articles', element: <Articles /> },
    { path: '/courses', element: <Courses /> },
    { path: '/infos', element: <Infos /> },
    { path: '/users', element: <Users /> },
]

export default router