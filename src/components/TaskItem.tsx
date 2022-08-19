import styles from "./TaskItem.module.css";
import { Trash } from "phosphor-react";

interface TaskItemProps {
  id: number;
  description: string;
  isComplete: boolean;
  onCheckTask: () => void;
}

export function Taskitem({
  id,
  description,
  isComplete,
  onCheckTask,
}: TaskItemProps) {
  return (
    <div className={styles.taskItem}>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={onCheckTask}
      ></input>
      <p>{description}</p>
      <button>
        <Trash size={24} className={styles.trashIcon} />
      </button>
    </div>
  );
}
