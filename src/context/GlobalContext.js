import {createContext, useReducer} from "react";
import addReducer from "./AppReducer";
const setThemePage = ()=>{
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localStorage.getItem("theme") === null) {
        if(userPrefersDark){
            localStorage.setItem("theme", "dark");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", 'dark');
            return true;
        }else{
            localStorage.setItem("theme", "light");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", 'light');
            return false;
        }
    }else{
        if(localStorage.getItem("theme") === "dark"){
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", 'dark');
            return true;
        }else{
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", 'light');
            return false;
        }
    }
}
const setLengPage = ()=>{
    if(localStorage.getItem("leng_page") === "es"){
        return 'es';
    }else{
        return 'en';
    }
}
const initialState = {
    darkTheme:setThemePage(),
    checkedThemecount:1,
    leng: setLengPage(),
    checkedLengcount:1,
}
export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(addReducer, initialState )
    const changeThemeTrue = () => {
        dispatch({type:'CHANGE_TRUE', payload:true});
        localStorage.setItem("theme", "dark");
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", 'dark');
    }
    const changeThemeFalse = () => {
        dispatch({type:'CHANGE_TRUE', payload:false});
        localStorage.setItem("theme", "light");
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", 'light');
    }
    const changeLengES = () => {
      dispatch({type:'CHANGE_LENG', payload:'es'});
        localStorage.setItem("leng_page", "es");
    }
    const changeLengEN = () => {
        dispatch({type:'CHANGE_LENG', payload:'en'});
        localStorage.setItem("leng_page", "en");
    }
    return (
        <GlobalContext.Provider value={{state, changeThemeTrue, changeThemeFalse, changeLengES, changeLengEN}}>
        {children}
    </GlobalContext.Provider>
    );
}