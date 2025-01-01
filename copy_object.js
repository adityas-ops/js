const original = {
    name: "Aditya",
    details: {
      age: 25,
      city: "Jaipur"
    }
  };
  
  const shallowCopy = { ...original }; // Using spread operator
  
  shallowCopy.name = "Sharma";
  shallowCopy.details.city = "Delhi";
  
  console.log(original.name); // Output: "Aditya" (unchanged)
  console.log(original.details.city); // Output: "Delhi" (changed because details is a reference)
  


  const original1 = {
    name: "Aditya",
    details: {
      age: 25,
      city: "Jaipur"
    }
  };
  
  // Creating a deep copy
  const deepCopy = JSON.parse(JSON.stringify(original1));
  
  deepCopy.name = "Sharma";
  deepCopy.details.city = "Delhi";
  
  console.log(original1.name);        // Output: "Aditya" (unchanged)
  console.log(original1.details.city); // Output: "Jaipur" (unchanged)
  





  
//   for loop for copy nested object 

const original2 = {
    name: "Aditya",
    details: {
      age: 25,
      city: "Jaipur"
    }
  };
  
  const deepCopy1 = {};
  
  for (let key in original2) {
    if (typeof original2[key] === "object") {
      deepCopy1[key] = { ...original2[key] };
    } else {
      deepCopy1[key] = original2[key];
    }
  }
  
  deepCopy1.name = "Sharma";
  deepCopy1.details.city = "Delhi";
  
  console.log(original2.name);        // Output: "Aditya" (unchanged)
  console.log(original2.details.city); // Output: "Jaipur" (unchanged)
  
  console.log(deepCopy1.name);        // Output: "Sharma"
  console.log(deepCopy1.details.city); // Output: "Delhi"
  
  // Output: { name: 'Aditya', details: { age: 25, city: 'Jaipur' } }
  console.log(original2);
  
  // Output: { name: 'Sharma', details: { age: 25, city: 'Delhi' } }
  console.log(deepCopy1);


  // copy using lodash

//   const _ = require("lodash");

// const original3 = {
//   name: "Aditya",
//   details: {
//     age: 25,
//     city: "Jaipur"
//   }
// };

// const deepCopy2 = _.cloneDeep(original3);

// deepCopy2.name = "Sharma";

// deepCopy2.details.city = "Delhi";

// console.log(original3.name);        // Output: "Aditya" (unchanged)
