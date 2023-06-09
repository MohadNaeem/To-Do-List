import React from "react";
import { useAppSelector } from "../../store/hooks";
import useCompletedTasks from "../hooks/useCompletedTasks";
import useTodayTasks from "../hooks/useTodayTasks";

const TasksDone: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const { tasks: allTasksDone } = useCompletedTasks({
    tasks: tasks,
    done: true,
  });

  const percentageAllTasks = (allTasksDone.length * 100) / tasks.length;

  return (
    <>
      {tasks.length !== 0 && (
        <div className="mt-6">
          <span className="flex justify-between mb-2">
            <span>All tasks </span> {allTasksDone.length}/{tasks.length}
          </span>
          <div className="barProgress">
            <div style={{ width: percentageAllTasks + "%" }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(TasksDone);
