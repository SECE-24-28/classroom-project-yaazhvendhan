let arr=["n1","n2","n3","n4","n5","n6","n7","n8","n9","n10"];
console.log("Original Array:", arr);

arr.push("n11");
console.log("After push:", arr);

arr.unshift("n0");
console.log("After unshift:", arr);

arr.pop();
console.log("After pop:", arr);

arr.shift();
console.log("After shift:", arr);

delete arr[4];
console.log("After delete index 4:", arr);

arr.splice(2, 1);
console.log("After splice index 2:", arr);

let subArray = arr.slice(3, 7);
console.log("Sliced Array (index 3 to 6):", subArray);

let index = arr.indexOf("n5");
console.log("Index of 'n5':", index);

let isPresent = arr.includes("n8");
console.log("Is 'n8' present?:", isPresent);
