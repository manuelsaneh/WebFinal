import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  token: string | null;
}

const initialState: LoginState = {
  token: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginToken(state, action: PayloadAction<LoginState>) {
      state.token = action.payload.token;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const { setLoginToken, logout } = loginSlice.actions;

export default loginSlice.reducer;
