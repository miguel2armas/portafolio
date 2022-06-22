import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const setInitTheme = ()=>{
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (localStorage.getItem("theme")) {
    if(localStorage.getItem("theme") === "dark"){
      document.querySelector("HTML")?.setAttribute("data-theme", 'dark');
        return 'dark';
    }else{
      document.querySelector("HTML")?.setAttribute("data-theme", 'light');
        return 'light';
    }
  }else{
    if(userPrefersDark){
        localStorage.setItem("theme", "dark");
        document.querySelector("HTML")?.setAttribute("data-theme", 'dark');
        return 'dark';
    }else{
        localStorage.setItem("theme", "light");
        document.querySelector("HTML")?.setAttribute("data-theme", 'light');
        return 'light';
    }
  }
}
export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: setInitTheme()
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      localStorage.setItem("theme", action.payload);
      document.querySelector("HTML")?.setAttribute("data-theme", action.payload);
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;


