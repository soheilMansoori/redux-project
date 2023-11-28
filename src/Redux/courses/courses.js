import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllCoursesFromServer = createAsyncThunk(
    'Courses/getAllCoursesFromServer',
    async (url) => {
        console.log(url);
        return fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                return data
            }).catch(error => console.log(error))
    }
)

const slice = createSlice({
    name: 'Courses',
    initialState: [],

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getAllCoursesFromServer.fulfilled, (state, action) => {
            console.log('state => ', state);
            console.log('action => ', action);
        })
    }


})

console.log(slice);

export const { } = slice.actions
export default slice.reducer