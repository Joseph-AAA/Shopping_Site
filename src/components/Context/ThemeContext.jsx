import { createContext,useContext, useState, useEffect } from "react";

const ThemeContext = createContext ("light");

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState(()=>{
        return localStorage.getItem("theme") || "light";
    })
    const toggleTheme = ()=>{
        setTheme((prev)=>{
           return prev === "light" ?  "dark" : "light"
        })
    }

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    },[theme]);



    
 return (
        <ThemeContext.Provider value={{theme : theme, toggleTheme : toggleTheme}}>
            {children}
        </ThemeContext.Provider>
 )

}

export const useTheme = ()=>{
    return useContext(ThemeContext);
}

