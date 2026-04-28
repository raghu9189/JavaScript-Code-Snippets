
import { useRef, useState } from "react";

const LocalStorageExplain = () => {
    const inputRef = useRef(null);
    const [data, setData] = useState("");

    const handleSave = () => {
        localStorage.setItem("name", inputRef.current.value);
        sessionStorage.setItem("name", inputRef.current.value);
        cookieStore.setItem("name", inputRef.current.value);
    }

    const handleGet = () => {
        setData(localStorage.getItem("name"));
    }

    const handleRemove = () => {
        localStorage.removeItem("name");
        setData("");
    }
    return (
        <div>
            <h1>LocalStorageExplain</h1>

            <input type="text" ref={inputRef} />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleGet}>Get</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default LocalStorageExplain;

// LocalStorage is a web storage API that allows you to store data in the browser.
// It is a key-value store that can be used to store data that persists even after the browser is closed.
// The data is stored in the browser and can be accessed by the same origin.
// LocalStorage is a synchronous API, which means that it blocks the main thread while it is in use.
// LocalStorage can store up to 5MB of data.
// LocalStorage is not available in incognito mode.

