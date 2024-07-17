import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAction } from "@reduxjs/toolkit"

const initialState = {
}

export const saveInput = createAction('SAVE_INPUT')

const formSlice = createSlice({
    name: "save",
    initialState,
    reducers: {
        save(state, action) {
            state[action.payload.inputID] = action.payload.input
        }
    }
})

export const { save } = formSlice.actions
export default formSlice.reducer