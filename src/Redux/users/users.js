import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import apiRequests from '../../Axios/config';

export const getUsersFromServer = createAsyncThunk(
    "Users/getUsersFromServer",
    async (url) => {
        // console.log("url => ", url);
        return apiRequests(url)
            .then(response => {
                // console.log(response);
                return response.data
            }).catch(error => console.log(error))
    }
)

const slice = createSlice({
    name: 'Users',
    initialState: [],
    reducers: {
        getAllUsers: (state, action) => {
            console.log('state => ', state);
            console.log('action => ', action);
        }
    },

    extraReducers: builder => {
        builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
            // console.log('state =>', state);
            // console.log('action =>', action);
            return action.payload
        })
    }
})

// console.log(slice);
export const { getAllUsers } = slice.actions
export default slice.reducer