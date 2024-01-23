import { Task } from "./types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      name: "Sample Project",
      id: "ProjectSample",
      progress: 75,
      type: "project",
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: "Idea",
      id: "Task 0",
      progress: 45,
      type: "task",
      project: "ProjectSample",
      displayOrder: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: "Research",
      id: "Task 1",
      progress: 25,
      dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 3,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "Discussion with team",
      id: "Task 2",
      progress: 10,
      dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 4,
    },
    /* {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        12,
        0,
        0
      ),
      name: "Developing",
      id: "Task 3",
      progress: 2,
      dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 5,
    }, */
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        12,
        0,
        0
      ),
      name: "Developing",
      id: "ProjectSetting",
      progress: 70,
      type: "project",
      project: "ProjectSample",
      dependencies: ["Task 2"],
      hideChildren: false,
      displayOrder: 5,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        10,
        0,
        0
      ),
      name: "Developing Task1",
      id: "Task D1",
      progress: 80,
      dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSetting",
      displayOrder: 5,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        12,
        0,
        0
      ),
      name: "Developing Task2",
      id: "Task D2",
      progress: 60,
      dependencies: ["Task D1"],
      type: "task",
      project: "ProjectSetting",
      displayOrder: 5,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "Demo Display",
      id: "MileStone1",
      progress: currentDate.getMonth(),
      type: "milestone",
      // dependencies: ["ProjectSetting"],
      project: "ProjectSetting",
      displayOrder: 6,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 17),
      name: "Review",
      id: "Task 4",
      type: "task",
      progress: 70,
      dependencies: ["ProjectSetting"],
      project: "ProjectSample",
      displayOrder: 6,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      name: "Release",
      id: "Task 6",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["Task 4"],
      project: "ProjectSample",
      displayOrder: 7,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: "Party Time",
      id: "Task 9",
      progress: 0,
      isDisabled: true,
      type: "task",
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
