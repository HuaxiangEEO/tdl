import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [newTodoCategory, setNewTodoCategory] = useState('工作')
  
  const categories = [
    { value: 'all', label: '全部' },
    { value: '工作', label: '工作' },
    { value: '个人', label: '个人' },
    { value: '学习', label: '学习' }
  ]

  const addTodo = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return
    
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      category: newTodoCategory
    }
    
    setTodos([...todos, newTodo])
    setInputValue('')
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const filteredTodos = selectedCategory === 'all' 
    ? todos 
    : todos.filter(todo => todo.category === selectedCategory)

  return (
    <div className="app">
      <h1>待办事项</h1>
      
      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          className="todo-input"
          placeholder="添加新的待办事项..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          className="category-select"
          value={newTodoCategory}
          onChange={(e) => setNewTodoCategory(e.target.value)}
        >
          {categories.slice(1).map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <button type="submit" className="add-btn">
          添加
        </button>
      </form>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category.value}
            className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {filteredTodos.length === 0 ? (
        <div className="empty-state">
          暂无待办事项，添加一个开始吧！
        </div>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <li key={todo.id} className="todo-item">
              <div className="todo-content">
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                  {todo.text}
                </span>
                <span className={`category-badge category-${todo.category}`}>
                  {todo.category}
                </span>
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App