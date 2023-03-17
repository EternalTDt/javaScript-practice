"use strict";

if (4 == 9) {
    console.log("True");
} else {
    console.log("False");
};

const num = 51;

if (num == 49) {
    console.log("Num is equals to 49");
} else if (num < 49) {
    console.log("Num is less than 49");
} else if (num == 50) {
    console.log("Num is equals to 50");
} else {
    console.log("Num is greater than 50");
};

number = 50;
(number === 50) ? console.log("Number is equals to 50") : console.log("Number is not equals to 50");


switch (number) {
    case 49:
        console.log("49");
        break;
    case 50:
        console.log("50");
    default:
        console.log("It's a default value");
        break;
}