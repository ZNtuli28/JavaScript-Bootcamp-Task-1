
console.log("====== EXERCISE 1: Temperature Check =====");

//here we will use if-else statements
let temperature = 28; 

console.log("\nSo....The tempersture check , with if-else:");
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else if (temperature > 25) {
    console.log("It's warm.");
}

console.log("\nSwitch conditional(same function btw):");
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    case (temperature > 25):
        console.log("It's warm.");
        break;
    default:
        console.log("Invalid temperature");
}

console.log("\n===== EXERCISE 2:Is it Divisible??? =====");
let number = 12; 

console.log("\nIf-ekse statement check:");
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

console.log("\nSwitch conditional divisibility check:");
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

console.log("\n===== EXERCISE 3: For Loops =====");

console.log("\n1. Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n2. Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("\n3. Sum of numbers from 1 to 100:");
let sumNumbers = 0;
for (let i = 1; i <= 100; i++) {
    sumNumbers += i;
}
console.log("Sum:", sumNumbers);

console.log("\n4. Print each element from array [1,2,3,4,5]:");
const numbersArray1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbersArray1.length; i++) {
    console.log(numbersArray1[i]);
}

console.log("\n5. Find largest number from [3,7,2,5,10,6]:");
const numbersArray2 = [3, 7, 2, 5, 10, 6];
let largest = numbersArray2[0];
for (let i = 1; i < numbersArray2.length; i++) {
    if (numbersArray2[i] > largest) {
        largest = numbersArray2[i];
    }
}
console.log("Largest number:", largest);

console.log("\n===== EXERCISE 4: While Loops =====");

console.log("\n1. Numbers from 1 to 10:");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("\n2. Even numbers between 1 and 20:");
i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

console.log("\n3. Sum of numbers from 1 to 100:");
let sumWhile = 0;
i = 1;
while (i <= 100) {
    sumWhile += i;
    i++;
}
console.log("Sum:", sumWhile);

console.log("\n4. Multiples of 5 less than 50:");
i = 5;
while (i < 50) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}

console.log("\n===== EXERCISE 5: D While Loops =====");

console.log("\n1. Numbers from 1 to 10:");
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

console.log("\n2. Sum of numbers from 1 to 100:");
let sumZ = 0;
i = 1;
do {
    sumZ += i;
    i++;
} while (i <= 100);
console.log("Sum:", sumZ);

console.log("\n3. Number validation:");
let userNumber;
do {
    userNumber = prompt("Enter a number greater than 10:");
    userNumber = Number(userNumber);
} while (userNumber <= 10);
console.log(`Thank you! You entered ${userNumber}`);

console.log("\n4. Guessing Game:");
const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = prompt("Guess a number between 1 and 10:");
    guess = Number(guess);
    if (guess !== secretNumber) {
        alert("Wrong guess! Try again.");
    }
} while (guess !== secretNumber);
alert(`Congratulations! ${secretNumber} is correct!`);


  
