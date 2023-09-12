const aCar = {
  owner : "Joe Bloggs",
  previous_owners: [
    { name: "Pat Smith", address: "1 Main Street" },
    { name: "Sheila Dwyer", address: "2 High Street" }
  ],
  address : '3 Walkers Lane',
  type : {
    make : 'Toyota',
    model : 'Corolla',
    cc : 1.8
    },
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
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

aCar.mileage = 10000
aCar.color = {
  exterior: "red",
  interior: { texture: "leather", shade: "cream" }
}

console.log(
  "It is a " +
    aCar.color.exterior +
    " car, " +
    aCar.mileage +
    " mileage, with a " +
    aCar.color.interior.texture +
    " interior."
);

console.log(
    "First owner: " +
      aCar.previous_owners[0].name +
      ' - ' +
      aCar.previous_owners[0].address
  )

  for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
}

for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name);
}