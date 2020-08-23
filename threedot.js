const ages =[12,13,14];
const ages2 = [45,46,56];
const ages3 = [101,120];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages,...ages2, (5),...ages3];
// console.log(allAges);
// console.log(allAges2);

const minister = 45;
const business = 55;
const player =  75;
const maximum = Math.max(minister,business,player);
// console.log(maximum);


const tkPoisa = [101,11,13];
const maximum1 = Math.max(...tkPoisa);
console.log(maximum1);

