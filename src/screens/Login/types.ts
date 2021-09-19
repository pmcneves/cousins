import languages from "../../languages/translations";

export type Language = keyof typeof languages;

export type LoginReducerType = {
  loading: boolean;
  authed: boolean;
  language: Language;
  error: string;
};
