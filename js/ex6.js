/* Homework 4
   Exercise 6 JavaScript code
   -- Strings and Functions
*/
word = prompt("Please enter a word:");
count = 0;
for (let i = 0; i < word.length; i++) {
   if ('aeiou'.includes(word[i].toLowerCase())) {
     count += 1;
   }
}
function checkPalindrome(word) {  
   wordLow = word.toLowerCase();  
   let l = wordLow.length;
   for (let i = 0; i < l / 2; i++) {
      if (wordLow.charAt(i) !== wordLow.charAt(l - 1 - i)) {
         return "not a palindrome";
      }
   }
   return "a palindrome";
}
console.log(`${word} contains ${count} vowel(s) and is ${checkPalindrome(word)}`);