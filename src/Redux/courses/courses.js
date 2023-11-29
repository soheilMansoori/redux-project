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
    }


})

// console.log(slice);

export const { } = slice.actions
export default slice.reducer