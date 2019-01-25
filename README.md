# Words counter
Simple package to count how many times a word appears in a string.

## [Live example](http://fjflala.github.io/words-counter)

## How to use it

### Install
```
npm install words-counter
```

### Require
```
const WordsCounter = require('words-counter');
```

### Create new constructor
```
const wordsCounter = new WordsCounter('Home, sweet home!', {
  caseSensitive: true,
  minCharacters: 2,
});
```

### Public methods

| Method |	Info	| Params |	Example |
|--|--|--|--|
|orderAscending | This method will return a list of elements with all the words in the string, and will order them in a ascending way |	Limit: Number (default 5) / Offset: Number (default 0) |	wordCounter.orderAscending(offset, limit) |
| orderDescending	| This method will return a list of elements with all the words in the string, and will order them in a descending way	| Limit: Number (default 5) / Offset: Number (default 0) |	wordCounter.orderAscending(offset, limit) |
|search	 | This method will return the word searched as an Object	| Word: String (Required)	wordCounter.search(word) |
| update	| This method should update the string	| String: String (Required) |	wordCounter.update(string) |

### Test (It uses jest)
```
npm run test
``` 
