let numberOne = 1;
let stringOne = '1';
let NumberThirty = 30;
let stringThirty = '30';
let numberTen = 10;
let stringTen = '10';

if (numberOne !== stringOne) {
  console.log('As variáveis numberOne e stringOne tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numberOne e stringOne não tem o mesmo valor');
}

if (NumberThirty === stringThirty) {
  console.log('As variáveis NumberThirty e stringThirty tem o mesmo valor e mesmo tipo');
} else {
  console.log('As variáveis NumberThirty e stringThirty não tem o mesmo tipo');
}

if (numberTen == stringTen) {
  console.log('As variáveis numberTen e stringTen tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numberTen e stringTen não tem o mesmo valor');
}