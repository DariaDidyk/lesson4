// let userIsHappy = true;
// let number = 0;

// do {
//     userIsHappy = confirm("Are you happy that the number is " + ++number + "?");
// } while (userIsHappy);

// let box = document.querySelector(".box");
// console.log("box");
// let moveBy = 200;
// let moved = parseInt(box.style.marginLeft) || 0;
// console.log("marg")

// do {
//     box.style.marginLeft = (++moved +"px");
// } while (moved < moveBy);

//  while (moved < moveBy) box.style.marginLeft = (++moved +"px");

// for (let number = 1, isUserHappy = true; isUserHappy; number++) {
//     isUserHappy = confirm("Are you happy that the number is " + number + "?");
// }

// for (let number = 1, isUserHappy = true; isUserHappy; number++) {
//     isUserHappy = confirm("Are you happy that the number is " + number + "?");
// }

for (let i = 1; i < 10; i++) {
    if (i % 2) continue;
    console.log(i);
}