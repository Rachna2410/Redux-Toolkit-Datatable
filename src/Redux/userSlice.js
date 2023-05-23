import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getEmployees = createAsyncThunk("users/getEmployees", async () => {
  return await fetch(
    "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f"
  ).then((res) => res.json());
});

const employeeReducer = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    hasError: false,
  },

  extraReducers: {
    [getEmployees.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getEmployees.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.result.auditLog;
    },
    
    [getEmployees.rejected]: (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.hasError = true;
    },
  },
});

export default employeeReducer.reducer;
