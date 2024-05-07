import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
  message: string;
  token: string | null;
}

const initialState: SignupState = {
  message: "",
  token: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setSignupToken(state, action: PayloadAction<SignupState>) {
      state.token = action.payload.token;
    },
    message(state, action: PayloadAction<SignupState>) {
      state.message = action.payload.message;
    },
  },
});

export const { setSignupToken, message } = signupSlice.actions;

export default signupSlice.reducer;
