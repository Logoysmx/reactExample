import { createContext, useState } from "react"

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [dataTable, setDataTable] = useState(null);
    return (
        <DataContext.Provider value={[dataTable, setDataTable]}>
            {children}
        </DataContext.Provider>
    );
};