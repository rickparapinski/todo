import styles from "./Tasklist.module.css";
import clipboard from "../assets/clipboard.svg";
import { Taskitem } from "./TaskItem";
import { ChangeEvent } from "react";

interface TasklistProps {
  tasks: {
    id: number;
    description: string;
    isComplete: boolean;
  }[];
  onCheckTask: () => void;
}

export function Tasklist({ tasks, onCheckTask }: TasklistProps) {
  return (
    <div className={styles.tasklist}>
      {tasks.map((task) => {
        return (
          <Taskitem
            id={task.id}
            key={task.id}
            description={task.description}
            isComplete={task.isComplete}
            onCheckTask={onCheckTask}
          />
        );
      })}
    </div>
  );
}

/*
<img src={clipboard} />
      <div className={styles.taskMessage}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>


      PQ 
*/
