// Isolated review exercise: see README.md for the intended contract.
export function completionPercent(tasks) {
  const completed = tasks.filter((task) => task.done).length;
  return Math.round((completed / tasks.length) * 100);
}

export function latestTasks(tasks, limit = 3) {
  return tasks
    .sort((left, right) => right.updatedAt - left.updatedAt)
    .slice(0, limit);
}

export function removeTask(tasks, taskId) {
  const index = tasks.findIndex((task) => task.id === taskId);
  return tasks.filter((_, position) => position !== (index < 0 ? tasks.length - 1 : index));
}
