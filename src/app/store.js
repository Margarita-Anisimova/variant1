import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import firstFormReducer from "./firstFormReducer.tsx";
import workReducer from "./workslice.tsx";
import educationReducer from "./educationslice";
import coursesReducer from "./coursesSlice.tsx";
import professionalSkillsReducer from "./professional_skillsSlice.tsx";

const appReducer = combineReducers({
    firstFormState: firstFormReducer,
    workState: workReducer,
    educationState: educationReducer,
    coursesState: coursesReducer,
    professionalSkillsState: professionalSkillsReducer,
});

const reducers = (state, action) => {
    if (action.type.includes("INIT")) {
        storage.removeItem("persist:root");
        state = undefined;
    }
    return appReducer(state, action);
};

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export default store;