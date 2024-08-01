import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAction } from "@reduxjs/toolkit"



export const saveInput = createAction('SAVE_INPUT')

const formSlice = createSlice({
    name: "save",
    initialState: [],
    reducers: {
        save: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { save } = formSlice.actions
export default formSlice.reducer