import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//initialized the states
const initialState = {
  user: null,
  loading_user: false,
  loading_signout: false,
  loading_signin: false,
  loading_signup: false,
};

//signup function
export const signup = createAsyncThunk("/signup", async (inputs) => {
  try {
  } catch (error) {}
});

//signin function
export const signin = createAsyncThunk("/signin", async (inputs) => {
  try {
  } catch (error) {}
});

//signout function
export const signout = createAsyncThunk("/signout", async () => {
  try {
  } catch (error) {}
});

export const authenticate = createAsyncThunk("/authenticate", async () => {
  try {
  } catch (error) {}
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //signup
    builder.addCase(signup.pending, (state) => {
      state.loading_signup = true;
    });
    builder.addCase(signup.rejected, (state) => {
      state.loading_signup = false;
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.loading_signup = false;
    });

    //signin
    builder.addCase(signin.pending, (state) => {
      state.loading_signin = true;
    });
    builder.addCase(signin.rejected, (state) => {
      state.loading_signin = false;
    });
    builder.addCase(signin.fulfilled, (state) => {
      state.loading_signin = false;
    });

    //signout
    builder.addCase(signout.pending, (state) => {
      state.loading_signout = true;
    });
    builder.addCase(signout.rejected, (state) => {
      state.loading_signout = false;
    });
    builder.addCase(signout.fulfilled, (state) => {
      state.loading_signout = false;
    });

    //authenticate
    builder.addCase(authenticate.pending, (state) => {
      state.loading_user = true;
    });
    builder.addCase(authenticate.rejected, (state) => {
      state.loading_user = false;
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.loading_user = false;
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
