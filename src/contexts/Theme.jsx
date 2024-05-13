import { createContext, useContext } from "react";

const ThemeContext=createContext({
    theme:"light",
    changeDark:()=>{},
    changeLight:()=>{}
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}