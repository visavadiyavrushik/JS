// ! ===================== 9 =================================

//  ? Q.8 Write a Function to remove null values and their keys

const obj = {
  name: "John",
  age: 30,
  job: "developer",
  mobileNo: null,
};

// Function to remove null values and their keys
const removeNullValues = (inputObject) => {
  const result = {};

  // Iterate through the keys
  for (const key in inputObject) {
    // Check if the value is not null
    if (inputObject[key] !== null) {
      // Add the key-value pair to the result object
      result[key] = inputObject[key];
    }
  }

  return result;
};

// Call the function with the given object
const newObj = removeNullValues(obj);

console.log(newObj);
