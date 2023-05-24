import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPost {
    id: number,
    title: string,
    body: string,
    userId: number,
}

export interface I_InitialState {
    loading: boolean,
    post: IPost,
    error: string
}
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

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        sendPostsRequest: (state) => {
            state.loading = true
        },
        sendPostsSuccess: (state, action:PayloadAction<IPost>) => {
            state.loading = false,
            state.post = action.payload,
            state.error = ''
        },
        sendPostsFailure: (state, action:PayloadAction<string>) => {
            state.loading = false,
            state.error = action.payload || 'Something went wrong'
        },
        changeTitle: (state, action:PayloadAction<string>) => {
            state.post.title = action.payload
        }
    }
});

export const {sendPostsRequest, sendPostsSuccess , sendPostsFailure, changeTitle} = postSlice.actions;
export default postSlice.reducer;