import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'

export const getUsersFromServer = createAsyncThunk(
    'Users/getUsersFromServer',
    async (url) => {
        console.log("url => ", url);
        return fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data
            })
            .catch(error => console.log(error))
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
            console.log('state =>', state);
            console.log('action =>', action);
        })
    }
})

console.log(slice);
export const { getAllUsers } = slice.actions
export default slice.reducer