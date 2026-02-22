import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  token: null,
  userData: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    phoneNumber: "",
    profilePicture: "",
    properties: [],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.token = action.payload.token;
      state.userData = {
        ...state.userData,
        ...action.payload.userData,
      };
    },
    logout: (state) => {
      state.status = false;
      state.token = null;
      state.userData = { ...initialState.userData };
    },
    updateProfilePicture: (state, action) => {
      state.userData.profilePicture = action.payload;
    },
    updateUserData: (state, action) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
  },
});

export const { login, logout, updateProfilePicture, updateUserData } =
  authSlice.actions;

export default authSlice.reducer;
