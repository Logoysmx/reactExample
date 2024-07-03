import { useState, useRef, useContext } from "react";
import { DataContext } from "../dataContext/DataContext";

export const Fetch = ({pageName}) => {

    // https://rickandmortyapi.com/api/character/196

    const [url, setUrl] = useState('https://6660f0e563e6a0189fe7f9c0.mockapi.io/api/v1/users');
    const [method, setMethod] = useState('GET');
    const [dataIsAvailable, setDataIsAvailable] = useState(false);
    const [requestData, setRquestData] = useState(null);
    const inputRef = useRef(null);
    
    const [dataContext, setDataContext] = useContext(DataContext);

    const methods = ['GET', 'POST'];

    const getData = async() => {
        setDataIsAvailable(false);
        await fetch(url, {
            method: method,
        })
        .then(response => response.json())
        .then(response => {
            setRquestData(response);
            setDataContext(response)
            setDataIsAvailable(true);
        });
    }

    const handleMethod = (e) => {
        const methodSelected = e.target.value;
        if(methodSelected != 0) {
            setMethod(e.target.value);
        }
    }

    const changeUrl = () => {
        setUrl(inputRef.current.value);        
        getData();
    }

    return (
        <div>
            <h1>{pageName}</h1>
            <p>URL Requested: {url}</p>
            <input ref={inputRef} type="text" defaultValue={url} placeholder={url} />
            <select onChange={handleMethod}>
                <option value="0">Select a method</option>
                { methods.map((val, index) => {
                    return <option key={index} value={val}>{val}</option>
                })}
            </select>
            <button onClick={() => changeUrl()} type="button" value={url}>Fetch Data</button>
            { dataIsAvailable && (
                <div className="json">
                    <pre>{JSON.stringify((requestData))}</pre>
                </div>
            )}
        </div>
    )
}
