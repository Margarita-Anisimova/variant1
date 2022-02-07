import { createSlice } from "@reduxjs/toolkit";

type worktype = {
  organization: string;
  post: string;
  date_start: int;
  date_end: int;
};

const initialState: { workState: worktype[] } = {
  workState: [
    {
      organization: "",
      post: "",
      date_start: 1900,
      date_end: 1900,
    },
  ],
};

export const counterSlice = createSlice({
  name: "workState",
  initialState: initialState,
  reducers: {
    newval1: (state, action) => {
      state.workState[action.payload.id][action.payload.name] =
        action.payload.value;
    },
    addItem: (state) => {
      state.workState.push({
        organization: "",
        post: "",
        date_start: 0,
        date_end: 0,
      });
    },
  },
});

export const { newval1, addItem } = counterSlice.actions;

export default counterSlice.reducer;
