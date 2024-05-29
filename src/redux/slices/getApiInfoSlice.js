import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import webHttpService from "../../apiServices/webHttpService";

export const getPost = createAsyncThunk("getPost", async () => {
  try {
    const { data } = await webHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/user/getPostDetail/66572ba8a20d039bad4724ff`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) alert(error.response.message);
    return { error };
  }
});

export const getFeed = createAsyncThunk("getFeed", async () => {
  try {
    const { data } = await webHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/user/getSimilarPost/66570ab26db83a6cbb2bce33`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) alert(error.response.message);
    return { error };
  }
});

export const getApiInfo = createSlice({
  name: "getApiInfo",
  initialState: {
    post: {},
    feed: {},
    loading: false,
    error: null,
  },
  reducers: {
    reset: (state, action) => {
      state.post = {};
      state.feed = {};
      state.loading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload.data.results.post;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.data.message;
    });

    builder.addCase(getFeed.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getFeed.fulfilled, (state, action) => {
      console.log(action.payload.data.results);
      state.loading = false;
      state.feed = action.payload.data.results;
    });
    builder.addCase(getFeed.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.data.message;
    });
  },
});

export const { reset } = getApiInfo.actions;
export default getApiInfo.reducer;
