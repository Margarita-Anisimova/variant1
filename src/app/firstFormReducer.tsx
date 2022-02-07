import { createSlice } from "@reduxjs/toolkit";
import image from "../images/image.png";

type socialNetworksType = { net: int; link: string };

type basic_information_type = {
  surname: string;
  name: string;
  patronymic: string;
  citizenship: string;
  city: string;
  image: any;
  birth_date: string;
  phoneNumber: int;
  email: string;
  socialNetworks: socialNetworksType[];
};

const initialState: { firstFormState: basic_information_type } = {
  firstFormState: {
    surname: "",
    name: "",
    patronymic: "",
    citizenship: "",
    city: "",
    image: image,
    birth_date: "",
    phoneNumber: "",
    email: "",
    socialNetworks: [],
  },
};

export const counterSlice = createSlice({
  name: "firstFormState",
  initialState: initialState,
  reducers: {
    newval: (state, action) => {
      state.firstFormState[action.payload.name] = action.payload.value;
    },
    newval1: (state, action) => {
      state.firstFormState.socialNetworks[action.payload.id][
        action.payload.name
      ] = action.payload.value;
    },
    addsocialNetwork: (state) => {
      state.firstFormState.socialNetworks.push({ net: 0, link: "" });
    },
    deleteLink: (state, action) => {
      state.firstFormState.socialNetworks.splice(action.payload, 1);
    },
    newImage: (state, action) => {
      // let module = await import(action.payload);
      state.firstFormState.image = action.payload;
    },
    deleteImage: (state) => {
      state.firstFormState.image = image;
    },
  },
});

export const {
  newval,
  addsocialNetwork,
  newval1,
  deleteLink,
  newImage,
  deleteImage,
} = counterSlice.actions;

export default counterSlice.reducer;
