import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  token: string | null;
}

const initialState: LoginState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<LoginState>) {
      state.token = action.payload.token;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
