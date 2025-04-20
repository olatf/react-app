



import { useState } from "react";


const ToDoList = () => {

  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Buy Macbook 2025 Laptop",
    "Go on vacation",
    "Learn cybersecurity",
    "Get a good paying job"

  ]);

  const [newtask, setNewtask] = useState("");

  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewtask(event.target.value);
  };

  const AddTask = () => {
    if (newtask.trim() !== "") {
      setTasks((t) => [...t, newtask]);
      setNewtask("");
    }
  };

  const DeleteTask = (index: number) => {
    const updatedList = tasks.filter((_, i) => i !== index);
    setTasks(updatedList);
  };

  const MoveUp = (index: number) => {
    if (index > 0) {
      const newList = [...tasks];

      [newList[index], newList[index - 1]] = [
        newList[index - 1],
        newList[index],
      ];

      setTasks(newList);
    }
  };

  const MoveDown = (index: number) => {
    if (index < tasks.length - 1) {
      const newList = [...tasks];

      [newList[index], newList[index + 1]] = [
        newList[index + 1],
        newList[index],
      ];

      setTasks(newList);
    }
  };

  return (
    <div className="Todo">
      <h2>My TO-Do List</h2>
      <input
        type="text"
        value={newtask}
        placeholder="Enter a task..."
        onChange={HandleChange}
      />
      <button type="submit" className="add" onClick={AddTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">
              {index + 1}. {task}{" "}
            </span>
            <button className="del" onClick={() => DeleteTask(index)}>
              Delete
            </button>
            <button className="directionButton" onClick={() => MoveUp(index)}>
              👆
            </button>
            <button className="directionButton" onClick={() => MoveDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ToDoList;
