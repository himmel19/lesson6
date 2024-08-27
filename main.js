let users = [];
let count = 0;

for (let i = 0; i < Infinity; i++) {
  let word = prompt("Введите команду"); /* add, user \\ del, user \\ stop */
  // console.log(word); /* 'add, user' => ['add', 'user'] */
  let array = word.split(", ");
  if (word == "stop") {
    count++;

    if (count == 5) break;
  }
  // console.log(array);
  if (array[0] == "add") {
    users.push(array[1]);
    console.log(users);
  } else if (array[0] == "del") {
    for (const key in users) {
      users[key] == array[1] ? users.splice(key, 1) : "";
    }
    console.log(users);
  }
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let chet = [];
let nechet = [];

for (let i = 1; i <= numbers.length; i++) {
  if (i % 2 == 0) {
    chet.push(i);
  } else {
    nechet.push(i);
  }
}
console.log(chet);
console.log(nechet);
