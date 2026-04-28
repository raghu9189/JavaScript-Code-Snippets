import { useMemo, useState } from "react";

const UseMemoExplain = () => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    const memoizedValue = useMemo(() => {
        return expensiveCalculation(num);
    }, [num]);
    console.log("Rendered");
    return (
        <div>
            <h1>UseMemoExplain</h1>
            <p>Number: {num}</p>
            <p>Memoized Value: {memoizedValue}</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <br />
            <button onClick={() => setNum(num + 1)}>Increment Num</button>
            <button onClick={() => setNum(num - 1)}>Decrement Num</button>
        </div>
    )
}

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
}

export default UseMemoExplain;