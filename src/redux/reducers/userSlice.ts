import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: number,
    name: string
}

interface InitialState {
    loading: boolean,
    users: User[],
    error: string
}

const initialState: InitialState = {
    loading: false,
    users: [],
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUsersRequest: (state) => {
            state.loading = true
        },
        fetchUsersSuccess: (state, action:PayloadAction<User[]>) => {
            state.loading = false,
            state.users = action.payload,
            state.error = ''
        },
        fetchUsersFailure: (state, action:PayloadAction<string>) => {
            state.loading = false,
            state.error = action.payload || 'Something went wrong'
        }
    }
});

export const {fetchUsersRequest, fetchUsersFailure, fetchUsersSuccess} = userSlice.actions;
export default userSlice.reducer;