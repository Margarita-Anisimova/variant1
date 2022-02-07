import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    educationState: [{
        university: "",
        faculty: "",
        specialization: "",
        graduation_year: 1990,
        form: 1,
        degree: 1,
    }, ],
};

export const counterSlice = createSlice({
    name: "educationState",
    initialState: initialState,
    reducers: {
        newval1: (state, action) => {
            state.educationState[action.payload.id][action.payload.name] =
                action.payload.value;
        },
        addItem: (state) => {
            state.educationState.push({
                university: "",
                faculty: "",
                specialization: "",
                graduation_year: 1990,
                form: 1,
                degree: 1,
            });
        },
    },
});

export const { newval1, addItem } = counterSlice.actions;

export default counterSlice.reducer;