/**
 * Test dependencies
 */
const WordsCounter = require('./words-count');

describe('Words Count', () => {
  it('Should convert a string into an array of words', () => {
    const wordsCounter = new WordsCounter('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nibh vitae mauris venenatis cursus sit amet condimentum urna. Pellentesque magna lacus, fringilla vitae arcu at, ullamcorper fermentum tellus. Donec tempor dignissim finibus. Suspendisse non nulla sit amet tellus egestas viverra at a justo. Duis ac erat tincidunt, convallis velit convallis, sagittis nisi. Curabitur dignissim tristique lacus commodo malesuada. Proin at semper felis. Phasellus feugiat dapibus justo non aliquet. Vestibulum quis sodales purus.', {
      caseSensitive: true,
    });

    expect(wordsCounter._wordsArray).toBeInstanceOf(Array);
  });

  it('Should map the words of the array and count how many times it appears', () => {
    const wordsCounter = new WordsCounter('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nibh vitae mauris venenatis cursus sit amet condimentum urna. Pellentesque magna lacus, fringilla vitae arcu at, ullamcorper fermentum tellus. Donec tempor dignissim finibus. Suspendisse non nulla sit amet tellus egestas viverra at a justo. Duis ac erat tincidunt, convallis velit convallis, sagittis nisi. Curabitur dignissim tristique lacus commodo malesuada. Proin at semper felis. Phasellus feugiat dapibus justo non aliquet. Vestibulum quis sodales purus.', {
      caseSensitive: true,
    });

    expect(wordsCounter._wordsMap).toBeInstanceOf(Object);
  });

  it('Should only map words with more than 2 characters', () => {
    const wordsCounter = new WordsCounter('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nibh vitae mauris venenatis cursus sit amet condimentum urna. Pellentesque magna lacus, fringilla vitae arcu at, ullamcorper fermentum tellus. Donec tempor dignissim finibus. Suspendisse non nulla sit amet tellus egestas viverra at a justo. Duis ac erat tincidunt, convallis velit convallis, sagittis nisi. Curabitur dignissim tristique lacus commodo malesuada. Proin at semper felis. Phasellus feugiat dapibus justo non aliquet. Vestibulum quis sodales purus.', {
      caseSensitive: true,
      minCharacters: 2,
    });

    expect(wordsCounter._wordsMap.at).toBeUndefined();
  });

  it('Should be case sensitive', () => {
    const wordsCounter = new WordsCounter('Home, sweet home!', {
      caseSensitive: true,
      minCharacters: 2,
    });

    expect(wordsCounter._wordsMap).toContainEqual({word: 'home', appearances: 1});
  });

  it('Should return an integer when you method search', () => {
    const wordsCounter = new WordsCounter('Home, sweet home!', {
      caseSensitive: true,
      minCharacters: 2,
    });

    expect(wordsCounter.search('Home').appearances).toEqual(1);
  });

  it('Should return null if the word is not founded using method search', () => {
    const wordsCounter = new WordsCounter('Home, sweet home!', {
      caseSensitive: true,
      minCharacters: 2,
    });

    expect(wordsCounter.search('Pizza')).toBeNull();
  });

  it('Should return the most repeated word in the string', () => {
    const wordsCounter = new WordsCounter('Home, sweet home!', {
      caseSensitive: false,
      minCharacters: 2,
    });

    expect(wordsCounter.orderAscending(0, 1)[0].word).toBe('home');
  });

  it('Should return the less repeated word in the string', () => {
    const wordsCounter = new WordsCounter('Home, sweet home!', {
      caseSensitive: false,
      minCharacters: 2,
    });

    expect(wordsCounter.orderDescending(0, 1)[0].word).toBe('sweet');
  });
});
