// EPISODE 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

// MY PREDICTION: The verdict will be Miss Scarlet as murderer. The const declareMurderer is passed to verdict once it has been executed.


//  EPISODE 1 ------------------------------------



// EPISODE 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// MY PREDICTION: Error due to reassignment of constant variable 'murderer'


//  EPISODE 2 ------------------------------------


// EPISODE 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// MY PREDICTION: first verdict will be Mrs Peacock and second will be Professor plum as Mrs Peacock is "temporarily"/locally stored within the declareMurderer method and Professor plum is available globally outside of a function 


//  EPISODE 3 ------------------------------------


// EPISODE 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// MY PREDICTION: All suspects will be passed to declareAllSuspects. SuspectThree will be printed out in the console log as its value defined in the 3rd line of code



//  EPISODE 4 ------------------------------------


// EPISODE 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };


  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

//   MY PREDICTION: scenario.weapon i.e the object attribute will be reassigned the newWeapon in the function definition. The result will be Revolver


//  EPISODE 5 ------------------------------------



// EPISODE 6



//  EPISODE 6 ------------------------------------


// EPISODE 7



//  EPISODE  7 ------------------------------------


// EPISODE 8



//  EPISODE 8 ------------------------------------





