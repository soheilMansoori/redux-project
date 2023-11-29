import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../Axios/config'

export const getAllArticlesFromServer = createAsyncThunk(
    "articles/getAllArticlesFromServer",
    async (url) => {
        return apiRequests.get(url)
            .then(response => {
                // console.log(response);
                return response.data
            }).catch(error => console.log(error))
    }
)


const slice = createSlice({
    name: "articles",
    initialState: [],

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllArticlesFromServer.fulfilled, (state, action) => {
            // console.log('state =>', state);
            // console.log('action =>', action);
            return action.payload
        })
    }

})

// console.log(slice);
export const { } = slice.actions
export default slice.reducer