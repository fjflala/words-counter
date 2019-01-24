/**
 * Module dependencies
 */

const regularExpression = /[^a-z0-9A-Z_äöüßÀÁÂĂÂÃÈÉÊÌÎÍÒÓÔÕȘȚÙÚĂĐĨŨƠàáăââãèéêîìíòóôõùúășțđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ'’]+/igm;

class WordsCounter {
  constructor(string, opts = {}) {
    this.caseSensitive = opts.caseSensitive || false;
    this.minCharacters = opts.minCharacters || 0;
    
    this._string = '';
    this._wordsArray = [];
    this._wordsMap = [];
    
    this._init(string);
  }
  
  _init (string) {
    if (!this.caseSensitive) {
      string = string.toLowerCase();
    }

    this._string = string || '';
    this._wordsArray = this.split();
    this.map();
  }

  _split() {
    return this._string.split(regularExpression)
      .filter(word => word.length > this.minCharacters);
  }

  _map() {
    for (let word of this._wordsArray) {
      const actualWord = this._wordsMap.findIndex(w => w.word === word);

      if (actualWord < 0) {
        this._wordsMap.push({
          word,
          appearances: 1,
        });
      } else {
        this._wordsMap[actualWord].appearances++;
      }
    }
  }

  search(word) {
    const q = this._wordsMap.find(w => w.word === word);
    return q || null;
  }

  mostRepeated(offset = 0, limit = 5) {
    const q = this._wordsMap.sort((a, b) => b.appearances - a.appearances);

    return q.slice(offset, limit);
  }

  lessRepeated(offset = 0, limit = 5) {
    const q = this._wordsMap.sort((a, b) => a.appearances - b.appearances);

    return q.slice(offset, limit);
  }
}

module.exports = WordsCounter;
