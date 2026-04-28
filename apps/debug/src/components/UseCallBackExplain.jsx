const UseCallBackExplain = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John");

    const incrementCount = useCallback(() => {
        console.log("Incrementing count");
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h1>UseCallBackExplain</h1>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
            <p>Name: {name}</p>
            <button onClick={() => setName("John")}>Change Name</button>
        </div>
    )
}

export default UseCallBackExplain;

// useCallback is a React Hook that returns a memoized callback function. 
