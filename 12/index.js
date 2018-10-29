const compareTriplets = (a, b) => {
  let pontosA = 0;
  let pontosB = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      pontosA++;
    }
    if (a[i] < b[i]) {
      pontosB++;
    }
  }
  return [pontosA, pontosB];
};
