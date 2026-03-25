//из O(n^2) в O(n)


const arr = [1, 2, 3, 2];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log("Duplicate found:", arr[i]);
    }
  }
}


const arr1 = [1, 2, 3, 2];
const set = new Set();

for (let i = 0; i < arr1.length; i++) {
  if (set.has(arr1[i])) {
    console.log("Duplicate found:", arr1[i]);
  } else {
    set.add(arr1[i]);
  }
}





function test(n) {
  if (n === 0) return;
  console.log(n);
  test(n - 1);
  console.log(n * 2);
}

test(2);
