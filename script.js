// write 3 variables
/* function variableDeclare(number, string, boolean) {
    var number = number;
    var string = string;
    var boolean = boolean;
    console.log(number, string, boolean);
}
variableDeclare(10, 'arafat', true); */

// 2 variablels using let const

/* let x = 10;
console.log(x);
x = 30;
console.log(x);
const y = 40;
console.log(y);
y = 50;
console.log(y); */

// simple math operations

/* function mathOperation(x, y) {
    let add = x + y;
    console.log(add);
    let sum = x - y;
    console.log(sum);
    let mul = x * y;
    console.log(mul);
    let div = x / y;
    console.log(div);
    let modu = x % y;
    console.log(modu);

}
mathOperation(10, 3); */

//comparison
// function comparison(x, y) {
//     /* if (x > y) {
//         console.log(x);
//     } */
//     /* if (x < y) {
//         console.log(x);
//     } */
//     /* if (x == y) {
//         console.log('equal nubmer');
//     } */
//     /* if (x != y) {
//         console.log('not equal');
//     } */
//     /* if (x >= y) {
//         console.log(x);
//     } */
//     /* if (x <= y) {
//         console.log(x);
//     } */
//     /* if (x === y) {
//         console.log('data type equal');
//     } */
// }
// comparison(100, 100);

//fulfill both conditions

// let x = 100;
// let y = 30;
// let a = 60;
// let b = 60;
// // if (x > y && a == b) {
// //     console.log('hello world');
// // }
// if (x < y || a == b) {
//     console.log('hello world2');
// }


//if else

/* let a = 30;
let b = 30;
if (a == b) {
    console.log(a);
} else {
    console.log('not equal')
} */


// while loop use and display odd nubmer

/* let number = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let i = 0;
while (i < number.length) {
    let element = number[i];
    if (element % 2 != 0) {
        console.log(element);
    }
    i++;
} */

//array declare and update element and add and delete element

/* let number = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(number);
// number[3] = 100;
// console.log(number);
// number.push(300);
// number.pop();
// console.log(number);
for (let i = 0; i < number.length; i++) {
    const element = number[i];

    if (element == 10) {
        console.log('10 number ase akhane')
    } else {
        console.log(element)
    }

} */

// use any for loop display every element

/* let numbers = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

for (const number of numbers) {
    console.log(number);
} */


// you have an array of numbers display only the nubmer bigger than 80

/* const numbers = [10, 80, 30, 90, 100, 65, 70, 300, 75, 81];
const largeNumber = [];
for (const number of numbers) {
    console.log(number)
    if (number > 80) {
        largeNumber.push(number)
    }

}
console.log(largeNumber) */

// return function 
/* function multiplication(x, y, z) {
    const total = x * y * z;
    return total;
}
const result = multiplication(5, 10, 4);
console.log(result); */

// const info = {
//     name: 'arafat',
//     id: 20212203007,
//     intake: 38,
//     section: 1
// }
// console.log(info);
// info.name = 'kalam';
// console.log(info);

// feetTOInch
/* function feetTOInch(feet) {
    return feet * 12;
}
const inch = feetTOInch(10);
console.log(inch); */

//centimeterToMeter
/* function centimeterToMeter(centimeter) {
    return centimeter * 0.01;
}
const meter = centimeterToMeter(300);
console.log(meter); */

//pageRequirements
/* function pageRequirements(x, y, z) {
    const book1 = 100 * x;
    const book2 = 200 * y;
    const book3 = 300 * z;
    const total = book1 + book2 + book3;
    return total;
}
const totalPage = pageRequirements(6, 5, 3)
console.log(totalPage); */

//bestFriend

/* function bestFriend(x) {
    let largeName = '';
    for (const friend of x) {
        // console.log(friend)
        if (friend.length > largeName.length) {
            largeName = friend;
        }
    }
    return largeName;
}
const friends = ['arafat', 'moniruzzaman', 'atik', 'mohit', 'kamrul islam pavel'];
const result = bestFriend(friends);
console.log(result); */

//onlyPositive

const numbers = [1, 5, 8, -7, 9, 6, 4, 3, 10]

function onlyPositive(numbers) {
    const positiveNumber = [];
    for (const number of numbers) {
        // console.log(number);
        if (number < 0) {
            // break;
            continue;
        } else {
            positiveNumber.push(number);
        }
    }
    return positiveNumber;
}
const result = onlyPositive(numbers);
console.log(result);