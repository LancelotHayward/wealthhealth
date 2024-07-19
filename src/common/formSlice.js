import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAction } from "@reduxjs/toolkit"

const initialState = {
    save: [],
    list: []
}

export const saveInput = createAction('SAVE_INPUT')

const formSlice = createSlice({
    name: "save",
    initialState,
    reducers: {
        save: (state, action) => {
            console.log(state)
            return [ ...state.list, action.payload ]
        }
    }
})

export const { save } = formSlice.actions
export default formSlice.reducer