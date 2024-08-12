export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    return [true, false];
  }

  return [task, task2]; // The return statement accesses the outer task and task2 variables
}
