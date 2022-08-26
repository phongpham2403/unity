import { createContext, useState } from "react";


const ShowContext = createContext()

const ShowProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const value = {
        show, setShow
    }

    return <ShowContext.Provider value={value}>
        {children}
    </ShowContext.Provider>
}

export { ShowContext, ShowProvider }