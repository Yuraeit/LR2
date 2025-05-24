function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

// Приклад:
let menu = {
  width: 200,
  height: 300,
  title: "Menu"
};

multiplyNumeric(menu);

console.log(menu);