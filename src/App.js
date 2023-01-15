import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import TodoList from "./Components/TodoList";

import AddTodos from "./Components/AddTodo";
import Filtered from "./Components/Filter";
function App() {
  let todos = useSelector((state) => state.Todo.todos);
  let Filter = useSelector((state) => state.Todo.Filter);
  return (
    <div className="App">
      <AddTodos />
      <TodoList
        todos={
          Filter == "Done"
            ? todos.filter((el) => el.isDone == true)
            : Filter == "UnDone"
            ? todos.filter((el) => el.isDone == false)
            : todos
        }
      />
      <p> </p>
      <Filtered />
    </div>
  );
}

export default App;
