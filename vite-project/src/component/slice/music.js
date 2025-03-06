import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchMusicEvents = createAsyncThunk(
    "music/fetchMusicEvents",
    async () => {
      const response = await axios.get("http://localhost:4050/api/music/getMusic");
      return response.data; // Returns the data for Redux store
    }
  );


  const musicSlice = createSlice({
    name: "music",
    initialState: {
      musicEvents: [],
      status: "idle", // idle | loading | succeeded | failed
      error: null,
    },
    reducers: {},
  
    extraReducers: (builder) => {
      builder
        .addCase(fetchMusicEvents.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchMusicEvents.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.musicEvents = action.payload;
        })
        .addCase(fetchMusicEvents.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
  });
  
  export default musicSlice.reducer;
  