import { createSlice } from "@reduxjs/toolkit";

type professionalSkillsStateType = {
  description: string;
  level: 0 | 1 | 2 | 3 | 4 | 5;
};

type skillsStateType = {
  professionalSkills: professionalSkillsStateType[];
  personal_qualities: string[];
};

const initialState: { qualities: skillsStateType } = {
  qualities: {
    professionalSkills: [],
    personal_qualities: [],
  },
};

export const counterSlice = createSlice({
  name: "professionalSkillsState",
  initialState: initialState,
  reducers: {
    newval: (state, action) => {
      state.qualities.professionalSkills[action.payload.id][
        action.payload.name
      ] = action.payload.value;
    },
    addItem: (state) => {
      state.qualities.professionalSkills.push({
        description: "",
        level: 0,
      });
    },
    newval1: (state, action) => {
      state.qualities.personal_qualities[action.payload.id] =
        action.payload.value;
    },
    addItem1: (state) => {
      state.qualities.personal_qualities.push("");
    },
  },
});

export const { newval, addItem, newval1, addItem1 } = counterSlice.actions;

export default counterSlice.reducer;
