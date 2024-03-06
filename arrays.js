const manualArrayLength = (array) => {
  let r = 0;

  for (const iterator of array) {
    r++;
  }

  return r;
};

const fakeIndexOf = (arr, arrayElement) => {
  let elementIndex = -1;
  const arrayLength = manualArrayLength(arr);
  for (let i = 0; i < arrayLength; i++) {
    if (arrayElement === arr[i]) {
      elementIndex = i;
    }
  }
  return elementIndex;
};

const fakePush = (arr, ...p) => {
  const arrayLength = manualArrayLength(arr);
  const pLength = manualArrayLength(p);
  for (let i = 0; i < pLength; i++) {
    arr[arrayLength + i] = p[i];
  }
  const newLength = manualArrayLength(arr);
  return newLength;
};
const mult = (a) => {
  return a * 2;
};

const fakeMap = (arr, func) => {
  const arrayLength = manualArrayLength(arr);
  let newArray = new Array(arrayLength);
  for (let i = 0; i < arrayLength; i++) {
    const element = func(arr[i]);
    newArray[i] = element;
  }
  return newArray;
};
console.log(fakeMap([1, 2, 3], mult));
