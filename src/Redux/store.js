import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/users'
import coursesReducer from './courses/courses'
const store = configureStore({
    reducer: {
        users: usersReducer,
        courses: coursesReducer,
    }
})

export default store