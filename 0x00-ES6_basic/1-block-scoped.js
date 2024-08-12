export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const innerTask = true; // This task is scoped to the if block
    const innerTask2 = false; // This task2 is scoped to the if block
    return [innerTask, innerTask2];
  }

  return [task, task2]; // The return statement accesses the outer task and task2 variables
}
