// goal: figure out where the first vowel is

// split: breaks up a string and puts the words into an array
// findIndex: works on arrays
// includes: true false for if it includes something
// slice

let translate = (word) => {
    // words lowercase
    word = word.toLowerCase();
    // figure out if it starts with vowel or not
    if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") { // if part is for if it's a vowel
        return word + "way";
    } else { // else means is starts with a constonant
        // loop through every letter of a word
        for (let i = 0; i < word.length; i++) {
            // console.log(word[i])
            if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
                return word.slice([i]) + word.slice(0, [i]) + "ay";
            }
        }
    }
}

module.exports = translate;

// let vowels = ["a", "e", "i", "o", "u"];

// let translate = (word) => {
//     // words lowercase
// word = word.toLowerCase();
// //    if it starts with a vowel
// // let vowelIndex = 0;
// // searching for a vowel start
// if (vowels.includes(word[0])) {
//     return word+"way";
// }


// // doesn't start with a vowel
// else {
//     const index = word.split("").findIndex((letter) => vowels.includes(letter));
//     return word.slice(index)+ word.slice(0, index) + "ay";
// }

// }
// module.exports = translate


    


