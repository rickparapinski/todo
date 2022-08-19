import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskBar } from "./components/TaskBar";
import { Taskheader } from "./components/Taskheader";
import { Tasklist } from "./components/Tasklist";

interface Tasks {
  id: number;
  isComplete: boolean;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      isComplete: false,
      description: "Nhai Viado",
    },
    {
      id: "2",
      isComplete: false,
      description: "Nhai Gay",
    },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: Math.random(),
        isComplete: false,
        description: newTaskText,
      },
    ]);
    setNewTaskText("");
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value);
  }

  function handleToggleTask(id: string) {
    const editTask = tasks.map((task) => {
      if (task.id == id) {
        console.log(id);
      }
    });
    //setTasks(taskCompleted);
  }
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TaskBar
          onCreateNewTask={handleCreateNewTask}
          onNewTaskTextChange={handleNewTaskTextChange}
          newTaskText={newTaskText}
        />
        <Taskheader lenghtTasks={tasks.length} />
        <Tasklist tasks={tasks} onCheckTask={handleToggleTask} />
      </div>
    </>
  );
}

export default App;
