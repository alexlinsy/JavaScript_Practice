import { useEffect, useLayoutEffect, useState } from "react";
import "./styles.css";

// //Array reduce example
// function addSum(...numbers) {
//   return numbers.reduce((accmulator, number) => {
//     return (accmulator += number);
//   });
// }

// console.log(addSum(1, 2, 3, 4, 5));

// let array1 = [
//   {
//     name: "James",
//     age: 10
//   },
//   {
//     name: "Alex",
//     age: 5
//   },
//   {
//     name: "Clara",
//     age: 5
//   }
// ];

// //Array add:
// function addItems(person) {
//   array1 = [...array1, person];
//   return array1;
// }

// console.log(addItems({ name: "Nick", age: 6 }));

// //Array find:
// const found = array1.find((person) => person.name === "Alex");
// console.log(found);

// //Array forEach:
// array1.forEach((person) => {
//   person.pc = "Mac";
// });
// console.log(array1);

// //Array map:
// const array2 = array1.map((person) => ({ ...person, pc: "Mac" }));
// console.log(array2);

// //Array filter:
// const filterArray = array1.filter((person) => person.age === 5);
// console.log(filterArray);

// //Array join:
// const joinArray = array1.map((person) => person.name);
// console.log(joinArray.join("-"));

// //Array includes:
// console.log(joinArray.includes("Alex"));

// //Array some:
// console.log(array1.some((person) => person.name === "Alex"));

// //Array slice:
// console.log(array1.slice(0,2))

// //Array map, filter and slice generate a new array

// let x = {
//   a: 1,
//   b: 2,
// };

// function arrayTransfer(x) {
//   let array = [];
//   for (let item in x) {
//     array.push(x[item]);
//   }
//   return array;
// }

// console.log(arrayTransfer(x));

// function BinarySearch(list, item) {
//   list.sort((a,b) => a - b);
//   let low = 0;
//   let high = list.length;
//   while(low <= high) {
//     let mid = Math.floor((low + high)/2);
//     let guess = list[mid];
//     if(guess < item) {
//       low = mid + 1;
//     } else if(guess > item) {
//       high = mid - 1;
//     } else if(guess === item) {
//       return true;
//     }
//   }
//   return false;
// }

// //let string1 = "hi";
// function reverseString(content) {
//   let splitStringArray = content.split('');
//   let reverseStringArray = splitStringArray.reverse();
//   return reverseStringArray.join('');
// }

// let a = [1,2,5,6,7,9];
// let b = [3,5,,9,12,20,70];

// const c = a.concat(b).sort((a,b) => a - b);
// console.log(c);

//Fetch data by promise:
//const users = fetch('https://randomuser.me/api/').then(res => res.json());
//users.then(res => console.log(res));

// //Fetch data by async await:
// async function getUsers(){
//   const response = await fetch('https://randomuser.me/api/');
//   const users = await response.json();
//   console.log(users);
// }
// getUsers();

//BFS DFS:
const airports = [
  "PHX",
  "JFK",
  "LAX",
  "OKC",
  "LIM",
  "BKK",
  "MEX",
  "LOS",
  "EZE",
  "HEL"
];
const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"]
];

const adjancyList = new Map();

function addNotes(airport) {
  adjancyList.set(airport, []);
}

function addRoutes(original, destination) {
  adjancyList.get(original).push(destination);
  adjancyList.get(destination).push(original);
}

airports.forEach((airport) => addNotes(airport));
routes.forEach((route) => addRoutes(...route));

function BFS(start, desAirport) {
  let queue = [start];
  let visited = new Set();

  while (queue.length > 0) {
    let airport = queue.shift();
    let destinations = adjancyList.get(airport);

    for (const destination of destinations) {
      if (destination === desAirport) {
        console.log(`${airport} Found ${desAirport}`);
      }
      if (!visited.has(destination)) {
        console.log(`${destination} `);
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}
// console.log(adjancyList);
// //BFS('PHX', 'BKK');

function DFS(start, desAirport, visited = new Set()) {
  console.log(start);
  const destinations = adjancyList.get(start);
  visited.add(start);

  for (const destination of destinations) {
    if (destination === desAirport) {
      console.log(`${start} Found ${desAirport}`);
      return;
    }
    if (!visited.has(destination)) {
      DFS(destination, desAirport, visited);
    }
  }
}

// DFS("PHX", "BKK");

const testUnsortedArray = [1, 45, 23, 2, 5, 10, 20];
// Merge Sort
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middle);
  const rightArr = array.slice(middle);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sortedArray = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArray.push(leftArr.shift());
    } else {
      sortedArray.push(rightArr.shift());
    }
  }

  return [...sortedArray, ...leftArr, ...rightArr];
}

// console.log(mergeSort(testUnsortedArray));

//Quick Sort
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = Math.floor(array.length / 2);
  let pivotEl = array[pivot];
  let greater = [];
  let less = [];

  for (let i in array) {
    if (parseInt(i, 8) !== pivot) {
      if (array[i] < pivotEl) {
        less.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
  }

  return [...quickSort(less), pivotEl, ...quickSort(greater)];
}

// console.log(quickSort(testUnsortedArray));

// //Insertion Sort
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const [sawpItem] = array.splice(i, 1);
        array.splice(j, 0, sawpItem);
      }
    }
  }
  return array;
}

// console.log(insertionSort(testUnsortedArray));

export default function App() {
  return <div className="app"></div>;
}
