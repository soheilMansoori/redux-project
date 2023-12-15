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


export const removeArticlesFromServer = createAsyncThunk(
    'articles/removeArticlesFromServer',
    async (id) => {
        return apiRequests.delete(`/articles/${id}`)
            .then(response => {
                console.log(response);
                return response.data
            }).catch(error => console.log(error))
    }
)



export const addNewArticleInServer = createAsyncThunk(
    'articles/addNewArticleInServer',
    async (newArticleBody) => {
        return apiRequests.post('articles', newArticleBody)
            .then(response => {
                console.log(response);
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

        builder.addCase(removeArticlesFromServer.fulfilled, (state, action) => {
            console.log('state', state);
            console.log('action', action);
            const newArticles = state.filter(article => article._id !== action.payload.id)
            return newArticles
        })


        builder.addCase(addNewArticleInServer.fulfilled, (state, action) => {
            console.log('satet', state);
            console.log('action', action);
            return state
        })
    }

})

// console.log(slice);
export const { } = slice.actions
export default slice.reducer