import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost, I_InitialState } from "../../redux/reducers/postSlice";

const initialPostState: IPost = {
    id: 0,
    title: '',
    body: '',
    userId: 0,
};
const initialState: I_InitialState = {
    loading: false,
    post: initialPostState,
    error: ''
}

export const createPost = createAsyncThunk('post/createPost', async () => {
    try {
        const postData = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        const headers = {
            'Content-type': 'application/json; charset=UTF-8',
        };
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData, {
            headers
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to create post');
    }
})

const thunkPostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        changeTitle: (state, action: PayloadAction<string>) => {
            state.post.title = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPost.fulfilled, (state, action: PayloadAction<IPost>) => {
                state.loading = false,
                state.post = action.payload,
                state.error = ''
            })
            .addCase(createPost.rejected, (state) => {
                state.loading = false,
                state.error = 'Something went wrong';
            });
    },
});

export const { changeTitle } = thunkPostSlice.actions;
export default thunkPostSlice.reducer;