import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        userId: null,
        name: null,
        email: null,
        loginType: null,
        profilePic: null,
    },
    error: null,
    errMsg: null,
    loading: true,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        update: (state, action) => {
            state.user.userId = action.payload.user_id
            state.user.name = action.payload.name
            state.user.email = action.payload.email
            state.user.loginType = action.payload.login_type
            state.user.profilePic = action.payload.profile_pic
            state.loading = false
        },
        loading: (state, action) => {
            state.loading = true
        },
        error: (state, action) => {
            state.error = action.payload.status
            state.errMsg = action.payload.message
            state.loading = false
        },
        logout: (state) => {
            state.user = initialState.user
            state.error = initialState.error
            state.errMsg = initialState.errMsg
            state.loading = initialState.loading
        }
    },
})

// Action creators are generated for each case reducer function
export const { update, loading, error, logout } = userSlice.actions

export default userSlice.reducer