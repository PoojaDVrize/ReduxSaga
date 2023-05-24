import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import thunkPostSlice from "./reducers/thunkPostSlice";


export const thunkStore = configureStore({
    reducer: {
        post: thunkPostSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof thunkStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof thunkStore.dispatch
