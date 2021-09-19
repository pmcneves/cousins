import { RootState } from "../../store/rootReducer";
import { Language } from "./types";

export const getLanguageSlice = (state: RootState): Language =>
  state.auth.language;
