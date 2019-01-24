const WordCounter = require('./src/words-count');

const wordCounter = new WordCounter(`Project: Keep Learning
That’s the end of this article, but keep learning. Some project ideas:

Can you combine the prior three functions into one function that turns a camelCase string into a regular sentence?
Can you add a period at the end of the string?
Reverse everything! Turn a string into a camelCase Hashtag
Post your projects and solutions in the comments! And don’t forget, this is merely the beginning of Regular Expressions, there’s so much more you can do with them!`, {
  caseSensitive: false,
  minCharacters: 2,
});

console.log(wordCounter.lessRepeated(0, 5));