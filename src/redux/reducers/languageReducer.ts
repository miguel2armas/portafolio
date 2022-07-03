import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const setInitLanguage = ()=>{
  if (localStorage.getItem("language")) {
    if(localStorage.getItem("language") === "es-CO"){
      document.querySelector("HTML")?.setAttribute("lang", "es-CO");
      return 'es-CO';
    }else{
      document.querySelector("HTML")?.setAttribute("lang", "en-US");
      return 'en-US';
    }
  }else{
    localStorage.setItem("language", "en-US");
    document.querySelector("HTML")?.setAttribute("lang", "en-US");
    return 'en-US';
  }
}
export interface LanguageState {
  value: string;
}

const initialState: LanguageState = {
  value: setInitLanguage()
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      localStorage.setItem("language", action.payload);
      document.querySelector("HTML")?.setAttribute("lang", action.payload);
      state.value = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language.value;

export default languageSlice.reducer;


