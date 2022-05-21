import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// create initial state function as an object
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create slice as object, builder object allows us to create cases
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer