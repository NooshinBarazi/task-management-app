import {configureStore} from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice.jsx";

export const store = configureStore({
    reducer: {
        tasks: tasksSlice
    }
});