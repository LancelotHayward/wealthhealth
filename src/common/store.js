import { combineReducers, configureStore } from "@reduxjs/toolkit"

import formSlice from "./formSlice.js"
// import listSlice from "./listSlice.js"

let state = {
    list: []
}

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        save: formSlice,
        // list: listSlice
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})