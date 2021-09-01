import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEventsState } from "../Types";
import store from "./store";

export const initialState: IEventsState = {
    loading: false,
    hasErrors: false,
    events: [],
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        getEvents: (state) => {
            state.loading = true;
        },
        getEventsSuccess: (state, { payload }) => {
            state.events = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getEventsFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        }
    }
});

export const { getEvents, getEventsSuccess, getEventsFailure } = eventsSlice.actions;

export const eventsSelector = (state: IEventsState) => state;

export default eventsSlice.reducer;

export function fetchEvents() {
    return async (dispatch:typeof store.dispatch) => {
        dispatch(getEvents())

        try {
            const response = await fetch('http://localhost:3009/events');
            const data = await response.json();

            dispatch(getEventsSuccess(data));
        } catch (err) {
            dispatch(getEventsFailure());
            console.log('Error:', err);
            
        }
    }
}