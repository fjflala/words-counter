/**
 * Module dependencies
 */
const regularExpression = /[^a-z0-9A-Z_äöüßÀÁÂĂÂÃÈÉÊÌÎÍÒÓÔÕȘȚÙÚĂĐĨŨƠàáăââãèéêîìíòóôõùúășțđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ'’]+/igm;

/**
 * Represents a word counter
 */
class WordsCounter {
  /**
   * Create a new WordsCounter
   * @param {number} string - Text to be counted
   * @param {object} opts - Config opts
   * @param {boolean} opts.caseSensitive
   * @param {number} opts.minCharacters 
   */
  constructor(string, opts = {}) {
    this.caseSensitive = opts.caseSensitive || false;
    this.minCharacters = opts.minCharacters || 0;
    
    this._string = '';
    this._wordsArray = [];
    this._wordsObjects = [];
    
    this._init(string);
  }
  
  /**
   * Private method _init
   * It initializes the library
   * @param {string} string 
   */
  _init (string) {
    if (!string || string === '' || typeof string !== 'string') {
      throw new Error('First param must be defined and must be a string');
    }

    if (!this.caseSensitive) {
      string = string.toLowerCase();
    }

    this._string = string || '';
    this._wordsArray = this._split();
    this._analizeWords();
  }

  /**
   * Private method _split()
   * Split the texto into an array
   * Uses a regex as split param
   * It also uses minCharacters opts to filter
   * @returns {array} - Words filtered
   */
  _split() {
    return this._string.split(regularExpression)
      .filter(word => word.length > this.minCharacters);
  }

  /**
   * Private method _analizeWords()
   * Analizes words in array
   * Makes a object for each word in array
   * Count how many times a word appears
   */
  _analizeWords() {
    for (let word of this._wordsArray) {
      const indexWord = this._wordsObjects.findIndex(w => w.word === word);

      if (indexWord < 0) {
        this._wordsObjects.push({
          word,
          appearances: 1,
        });
      } else if (this._wordsObjects[indexWord] && this._wordsObjects[indexWord].appearances) {
        this._wordsObjects[indexWord].appearances++;
      }
    }
  }

  /**
   * Search method
   * @param {string} word - query
   * @returns {object}
   */
  search(word) {
    if (!word || word === '' || typeof word !== 'string') {
      throw new Error('Param should be defined and be a string');
    }

    const foundedWord = this._wordsObjects.find(w => w.word === word);
    return foundedWord || null;
  }

  /**
   * Most Repeated Words method
   * @param {number} offset - default 0
   * @param {number} limit  - default 5
   * @returns {array}
   */
  orderAscending(offset = 0, limit = 5) {
    const foundedWords = this._wordsObjects.sort((a, b) => b.appearances - a.appearances);

    return foundedWords.slice(offset, limit);
  }

  /**
   * Less Repeated Words method
   * @param {number} offset - default 0
   * @param {number} limit  - default 5
   * @returns {array}
   */
  orderDescending(offset = 0, limit = 5) {
    const foundedWords = this._wordsObjects.sort((a, b) => a.appearances - b.appearances);

    return foundedWords.slice(offset, limit);
  }
}

module.exports = WordsCounter;
