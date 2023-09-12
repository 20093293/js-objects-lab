const aCar = {
  owner : "Joe Bloggs",
  type : {
    make : 'Toyota',
    model : 'Corolla',
    cc : 1.8
    },
    registration: { year: 201, county: "WD", num: 1058 }
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log(
    "His reg is - " +
      aCar.registration.year +
      "-" +
      aCar.registration.county +
      "-" +
      aCar.registration.num
  );