function greeting1(name) {
  return new Promise((resolve, reject) => {
    const count = 1000000;
    let i = 0;
    while (i < count) {
      i++;
    }

    resolve({ name: `Hello ${name}` });
  });
}

function greeting2(name) {
  // return new Promise((resolve, reject) => {
  //   //reject(`Hello ${name}`);
  //   reject(new Error("fatal error"));
  // });
  return "xxxxxxxxx";
}

console.log(greeting1("cesar"));
console.log(greeting2("carlos"));

// axios: consulta fnsku
// axios: consulta impuestos

// completar la info de un producto y ser almacenado

//const result = Promise.all([greeting1("cesar"), greeting2("carlos")]);

// const result = Promise.allSettled([greeting1("cesar"), greeting2("carlos")]);
// result
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// Use await
async function callAsync() {
  try {
    const resultAwait = await Promise.any([
      greeting1("cesar xxxx"),
      greeting2("carlos"),
    ]);
    console.log(resultAwait);
    return resultAwait;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(callAsync());
