import { combineReducers } from "redux";
import { paletteReducer } from "./paletteReducer";

export const rootReducer = combineReducers({
    palette: paletteReducer
});

export type RootState = ReturnType<typeof rootReducer>