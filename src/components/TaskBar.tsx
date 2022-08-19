import styles from "./Taskbar.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";

interface TaskbarProps {
  onCreateNewTask: (event: FormEvent) => void;
  onNewTaskTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
  newTaskText: string;
}

export function TaskBar({
  onCreateNewTask,
  onNewTaskTextChange,
  newTaskText,
}: TaskbarProps) {
  function handleChangeTaskInput() {}
  return (
    <div>
      <form onSubmit={onCreateNewTask} className={styles.taskbar}>
        <input
          type="text"
          name="task"
          onChange={onNewTaskTextChange}
          value={newTaskText}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
