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

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// MY PREDICTION: first verdict will be Mrs Peacock and second will be Professor plum as Mrs Peacock is "temporarily"/locally stored within the declareMurderer method and Professor plum is available globally outside of a function 


//  EPISODE 3 ------------------------------------


// EPISODE 4



//  EPISODE 4 ------------------------------------


// EPISODE 5



//  EPISODE 5 ------------------------------------



// EPISODE 6



//  EPISODE 6 ------------------------------------


// EPISODE 7



//  EPISODE  7 ------------------------------------


// EPISODE 8



//  EPISODE 8 ------------------------------------





