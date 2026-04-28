import useToggle from "../hooks/useToggle";

const CustomHookExplain = () => {
    const [value, toggle] = useToggle(false);
    console.log(value);
    return (
        <div>
            <h1>CustomHookExplain</h1>
            <p>Value: {value ? "True" : "False"}</p>
            <button onClick={() => toggle()}>Toggle</button>
        </div>
    )
}

export default CustomHookExplain;

// Custom hooks are functions that start with the word "use" and can be used to share logic between components.