import { useState, memo } from "react";

const ReactMemoExplain = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>React Memo Explain</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <ChildComponent name="John" />
        </div>
    )
}

const ChildComponent = memo(({ name }) => { // memo is applied
    console.log("Child Component also Rendered");
    // when parent component is rendered, child component is also rendered
    // to prevent this, we use React.memo
    return (
        <div>
            <p>Name: {name}</p>
        </div>
    )
})

export default ReactMemoExplain;
//  React.memo is a higher-order component (HOC) that prevents unnecessary re-renders by memoizing a component and doing a shallow comparison of its props. If the props don’t change, React skips rendering the component.