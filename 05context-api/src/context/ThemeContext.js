import { createContext, useState } from "react";

// creamos el contexto
const ThemeContext = createContext();

const initialTheme = "light";

// creamos el provider del contexto el cual envolverá a los componentes que lo utilicen
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const data = { theme, handleTheme };

  // En la propiedad value es donde enviaremos los datos que necesitan los hijos de este provider
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
