function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

let schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "вставай";

alert(isEmpty(schedule));