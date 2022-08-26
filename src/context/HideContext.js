import { createContext, useState } from "react";


const HideContext = createContext()

const HideProvider = ({ children }) => {
    const [hide, setHide] = useState(false)
    const value = {
        hide, setHide
    }
    return <HideContext.Provider value={value}>
        {children}
    </HideContext.Provider>
}

export { HideContext, HideProvider }