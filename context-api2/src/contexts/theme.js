import { createContext, useContext } from "react";

// one differbce from previous: phle wale me koi value nhi daala tha, yaha daal skte
export const ThemeContext = createContext({
        // deafult values
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// custom hook
// 2 ke jagah ek file me kaam

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}