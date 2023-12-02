import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Nav from "../components/Navbar";
function Todo() {
  const storageTasks = JSON.parse(localStorage.getItem("todolist"));
  const [tasks, setTasks] = useState(storageTasks ? storageTasks : []);
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    if (newTask) {
      const newList = [...tasks, newTask];
      localStorage.setItem("todolist", JSON.stringify(newList));
      setTasks(newList);
      document.getElementById("taskinput").value = "";
      setNewTask("");
    }
  };
  const deleteTask = (tasktodelete) => {
    const newList = tasks.filter((task) => task !== tasktodelete);
    localStorage.setItem("todolist", JSON.stringify(newList));
    setTasks(newList);
  };

  return (
    <>
      <Nav />
      <div
        style={{
          border: "1px solid lightgray",
          padding: "30px",
          width: "600px",
          margin: "50px auto",
        }}
      >
        <h1>Todo List</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <input
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
            id="taskinput"
            placeholder="Input task here"
            style={inputStyle}
          />
          <button onClick={() => addNewTask()} style={buttonStyle}>
            Add new task
          </button>
        </div>
        {tasks.map((task, i) => {
          return (
            <div style={taskStyle}>
              {task}{" "}
              <FaTrash
                color="red"
                onClick={() => {
                  deleteTask(task);
                }}
                style={{ cursor: "pointer" }}
                size={12}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Todo;

const inputStyle = {
  border: "none",
  outline: "none",
  width: "60%",
  borderBottom: "1px solid lightgray",
};
const taskStyle = {
  padding: "20px",
  borderBottom: "1px solid lightgray",
  display: "flex",
  justifyContent: "space-between",
};
const buttonStyle = {
  border: "none",
  backgroundColor: "#232323",
  color: "white",
  height: "40px",
  padding: "10px",
  fontSize: "12px",
};
