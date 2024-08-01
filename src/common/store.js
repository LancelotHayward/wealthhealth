import { combineReducers, configureStore } from "@reduxjs/toolkit"

import formSlice from "./formSlice.js"
// import listSlice from "./listSlice.js"

export const store = configureStore({
    reducer: combineReducers({
        list: formSlice,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})