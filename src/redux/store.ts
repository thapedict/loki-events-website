import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./eventsSlice";

export const store = configureStore({
    reducer: eventsSlice
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;