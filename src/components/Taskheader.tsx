import styles from "./Taskheader.module.css";

interface TaskheaderProps {
  lenghtTasks: number;
}

export function Taskheader({ lenghtTasks }: TaskheaderProps) {
  return (
    <div className={styles.taskheader}>
      <div className={styles.header}>
        <div className={styles.openTasks}>
          <p>
            Tarefas criadas <span>{lenghtTasks}</span>
          </p>
        </div>
        <div className={styles.completedTasks}>
          <p>
            Concluídas <span>0</span>
          </p>
        </div>
      </div>
    </div>
  );
}
