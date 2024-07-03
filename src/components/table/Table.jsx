import { useState } from "react"
import { useContext } from "react";
import { DataContext, DataProvider } from "../dataContext/DataContext";

export const TableRender = () => {

    const [ dataContext, setDataContext ] = useContext(DataContext);

    return (
        <>            
            { dataContext && (
                <>
                    <h1>Component</h1>
                    { JSON.stringify(dataContext) }
                    
                </>
            )}
        </>
    )

}

/*{dataContext.map((obj, index) => <p key={index}>{obj.name}</p>)}*/