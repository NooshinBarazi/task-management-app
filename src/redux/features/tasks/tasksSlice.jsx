import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'http://46.100.46.149:8069/api/tasks/';


export const fetchTasks = createAsyncThunk('tasks/fetch', async (_, {rejectWithValue}) => {
    try{
        const response = await  axios.get(API_URL)
        return response.data;
    }catch(error){
        rejectWithValue(error.response.data);
    }
})

export const addTasks = createAsyncThunk('tasks/add', async (task, {rejectWithValue}) => {
    try {
        const response = await axios.post(API_URL, task)
        return response.data;
    }catch(error){
        rejectWithValue(error.response.data);
    }
})

export const updateTasks = createAsyncThunk('tasks/update', async (task, {rejectWithValue}) => {
    try {
        const response = await axios.put(`${API_URL}${task.id}`, task)
        return response.data;
    }catch(error){
        rejectWithValue(error.response.data);
    }
})

export const deleteTasks = createAsyncThunk('tasks/delete', async (id, {rejectWithValue}) => {
    try {
        await axios.delete(`${API_URL}${id}`);
        return id;
    }catch(error){
        rejectWithValue(error.response.data);
    }
})


const tasksSlice = createSlice({
    name: "tasks",
    initialState:{
        tasks: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = action.payload.results;
            state.error = null;
        })
            .addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
            .addCase(addTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks.push(action.payload);
            })
            .addCase(addTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateTasks.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.tasks.findIndex((task) => task.id === action.payload.id);
                if (index !== -1) {
                    state.tasks[index] = action.payload;
                }
            })
            .addCase(updateTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            })
            .addCase(deleteTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export default tasksSlice.reducer;