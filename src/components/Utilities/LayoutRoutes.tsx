import React, { useState } from "react";
import { Task } from "../../interfaces";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import TaskTable from "./Table";

type Props = {
  title: string;
  tasks: Task[] | [];
};

const LayoutRoutes: React.FC<Props> = ({ title, tasks }) => {
  const [isListInView1, setIsListInView1] = useState<boolean>(false);

  const tasksTitle = `${title} (${tasks.length} ${tasks.length === 1 ? "task" : "tasks"
    })`;

  return (
    <section>
      <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200">
        {tasksTitle}
      </h1>
      <ul
        className={`tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${isListInView1
            ? "grid-cols-1"
            : "2xl:grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 items-end"
          }`}
      >
        <TaskTable tasks={tasks} />
      </ul>
    </section>
  );
};

export default React.memo(LayoutRoutes);
