import { useState, createContext, useContext } from "react";

const FilterContext = createContext()

export const FilterProvider = ({children})=>{
    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState('all')

    return(
        <FilterContext.Provider value={{searchTerm, setSearchTerm, category, setCategory}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = ()=>{
    return useContext(FilterContext);
}