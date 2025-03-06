import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../component/slice/music";

export const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});
