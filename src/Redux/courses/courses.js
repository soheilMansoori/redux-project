import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../Axios/config'

export const getAllCoursesFromServer = createAsyncThunk(
    "Courses/getAllCoursesFromServer",
    async (url) => {
        return apiRequests(url)
            .then(response => {
                console.log(response);
                return response.data
            }).catch(error => console.log(error))
    }
)

export const removeCoursesFromServer = createAsyncThunk(
    'Courses/removeCoursesFromServer',
    async (id) => {
        return apiRequests.delete(`courses/${id}`)
            .then(response => {
                console.log(response);
                return response.data
            }).catch(error => console.log(error))
    }
)


export const addOfferToAllCoursesFromServer = createAsyncThunk(
    'Courses/addOfferToAllCoursesFromServer',
    async (discount) => {
        console.log({ discount });
        return apiRequests.post('/courses/discount', { discount })
            .then(response => {
                console.log(response);
                return response.data
            }).catch(error => console.log(error))
    }
)


export const addNewCourseInServer = createAsyncThunk(
    'Courses/addNewCourseInServer',
    async (newCourseBody) => {
        return apiRequests.post('/courses', newCourseBody)
            .then(response => {
                console.log(response);
                return response.data
            }).catch(error => console.log(error))
    }
)


const slice = createSlice({
    name: 'Courses',
    initialState: [],

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllCoursesFromServer.fulfilled, (state, action) => {
            // console.log('state => ', state);
            // console.log('action => ', action);
            return action.payload
        })


        builder.addCase(removeCoursesFromServer.fulfilled, (state, action) => {
            console.log('state', state);
            console.log('action', action);
            const newCourses = state.filter(course => course._id !== action.payload.id)
            return newCourses

        })


        builder.addCase(addOfferToAllCoursesFromServer.fulfilled, (state, action) => {
            console.log('state', state);
            console.log('action', action);
            return state
        })


        builder.addCase(addNewCourseInServer.fulfilled, (state, action) => {
            console.log('state', state);
            console.log('action', action);
            return state
        })
    }


})

// console.log(slice);

export const { } = slice.actions
export default slice.reducer