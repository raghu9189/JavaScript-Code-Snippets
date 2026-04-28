const { useState, useEffect } = React;

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Load initial todos from IndexedDB
        window.dbStore.getTodos().then(data => {
            setTodos(data);
        }).catch(err => {
            console.error("Failed to load todos from DB", err);
        });
    }, []);

    const handleAddTodo = async (e) => {
        e.preventDefault();
        const trimmed = inputValue.trim();
        if (!trimmed) return;

        const newTodo = {
            id: Date.now().toString(),
            text: trimmed,
            completed: false,
            createdAt: new Date().toISOString()
        };

        try {
            await window.dbStore.addTodo(newTodo);
            setTodos(prev => [...prev, newTodo]);
            setInputValue('');
        } catch (err) {
            console.error("Failed to add todo", err);
        }
    };

    const handleToggleTodo = async (todo) => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        try {
            await window.dbStore.updateTodo(updatedTodo);
            setTodos(prev => prev.map(t => t.id === todo.id ? updatedTodo : t));
        } catch (err) {
            console.error("Failed to update todo", err);
        }
    };

    const handleDeleteTodo = async (id, e) => {
        e.stopPropagation(); // prevent triggering the toggle when clicking delete
        try {
            await window.dbStore.deleteTodo(id);
            setTodos(prev => prev.filter(t => t.id !== id));
        } catch (err) {
            console.error("Failed to delete todo", err);
        }
    };

    // Sort todos so incomplete are first, and newest incomplete are top.
    // If completed, newest completed are first.
    const sortedTodos = [...todos].sort((a, b) => {
        if (a.completed === b.completed) {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return a.completed ? 1 : -1;
    });

    return (
        <div className="app-container">
            <h1>Tasks</h1>
            <p className="subtitle">Stay productive, even offline.</p>

            <form onSubmit={handleAddTodo} className="input-container">
                <input 
                    type="text" 
                    placeholder="What needs to be done?" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="add-btn">Add</button>
            </form>

            {todos.length === 0 ? (
                <div className="empty-state">No tasks yet. You're all caught up!</div>
            ) : (
                <ul className="todo-list">
                    {sortedTodos.map(todo => (
                        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            <div className="todo-content" onClick={() => handleToggleTodo(todo)}>
                                <div className="checkbox"></div>
                                <span className="text">{todo.text}</span>
                            </div>
                            <button className="delete-btn" onClick={(e) => handleDeleteTodo(todo.id, e)} title="Delete Task">
                                ✖
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
