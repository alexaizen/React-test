import { createSlice, configureStore } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { isLogedIn: false },
  reducers: {
    loginToggle(state) {
      state.isLogedIn = !state.isLogedIn;
    },
  },
});

const store = configureStore({
  reducer: loginSlice.reducer,
});

export const loginActions = loginSlice.actions;
export default store;
