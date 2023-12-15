import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/users'
import coursesReducer from './courses/courses'
import articlesReducer from './articles/articles'

const store = configureStore({
    reducer: {
        users: usersReducer,
        courses: coursesReducer,
        articles: articlesReducer,
    }
})
export default store