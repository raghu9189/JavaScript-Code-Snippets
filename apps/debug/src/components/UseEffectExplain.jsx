import { useEffect, useState } from "react";

const UseEffectExplain = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Mounted or Updated");
        // return () => {
        //     console.log("Cleanup before next effect or unmount");
        // };
    }, [count]);

    return (
        <div>
            <h1>UseEffectExplain</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UseEffectExplain;
