import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coursesState: [
    {
      name: "",
      organisation: "",
      isOnline: false,
      graduation_year: 1990,
    },
  ],
};

export const counterSlice = createSlice({
  name: "coursesState",
  initialState: initialState,
  reducers: {
    newval1: (state, action) => {
      state.coursesState[action.payload.id][action.payload.name] =
        action.payload.value;
    },
    addItem: (state) => {
      state.coursesState.push({
        name: "",
        organisation: "",
        isOnline: false,
        graduation_year: 1990,
      });
    },
  },
});

export const { newval1, addItem } = counterSlice.actions;

export default counterSlice.reducer;
