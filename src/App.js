/**
 * Module dependencies
 */
const React = require('react');
const WordsCounter = require('../../');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Home sweet home',
      caseSensitive: false,
      minCharacters: 2,
    };

    this.wordsCounter = new WordsCounter(this.state.value, {
      caseSensitive: this.state.caseSensitive,
      minCharacters: this.state.minCharacters,
    });

    this.onChange = this.onChange.bind(this);
    this.onChangeCheck = this.onChangeCheck.bind(this);
    this.analize = this.analize.bind(this);
  }

  onChange(evt) {
    const {
      value,
    } = evt.target;
    
    this.setState({
      value,
    });
  }

  onChangeCheck() {
    this.setState({
      caseSensitive: !this.state.caseSensitive,
    }, () => {
      this.wordsCounter.caseSensitive = this.state.caseSensitive;
    });
  }
  
  analize(evt) {
    evt.preventDefault();

    this.wordsCounter.update(this.state.value);
    this.setState({
      wordCounter: this.wordsCounter.orderAscending(),
    });
  }

  render() {
    return (
      <main className="ui-main">
        <header className="ui-header">
          <h1 className="ui-title">Words Counter</h1>
        </header>
        <form className="ui-form" onSubmit={this.analize}>
          <label>
            <input
              type="checkbox"
              checked={this.state.caseSensitive}
              onChange={this.onChangeCheck}
            />
            Case Sensitive
          </label>
          <textarea
            className="ui-textarea"
            onChange={this.onChange}
            value={this.state.value}
            rows={8}
          />
          <button className="ui-button">Analize!</button>
        </form>
        {this.state.wordCounter && <section>
          <div className="ui-analisis">
            <h4 className="ui-analisis__title">Words / Appearances <small>(Top 5 results)</small></h4>
            <a href="#API" className="ui-analisis__link">More information</a>
            <ul className="ui-list">
              {this.state.wordCounter && this.state.wordCounter.map(wordObject => (
                <li className="ui-item">
                  <span className="ui-item__word">{wordObject.word}</span>
                  <span className="ui-item__appears">{wordObject.appearances}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ui-analisis">
            <h4>JSON output</h4>
            <code className="ui-code">{JSON.stringify(this.state.wordCounter)}</code>
          </div>
        </section>}
        <section className="ui-api" id="API">
          <h2>How to use it</h2>
          <p>Install it:</p>
          <code className="ui-code">
            npm install words-counter
          </code>
          <p>Import & create a new constructor:</p>
          <code className="ui-code">
            const WordsCounter = require('words-counter'); <br />
            const wordsCounter = new WordsCounter('Home, sweet Home!', {`{
              caseSensitive: true,
              minCharacters: 2,
            }`});
          </code>
          <h2>(Public methods)</h2>
          <table className="ui-table">
            <thead>
              <tr>
                <th className="ui-th">Method</th>
                <th className="ui-th">Info</th>
                <th className="ui-th">Params</th>
                <th className="ui-th">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ui-td">orderAscending</td>
                <td className="ui-td">This method will return a list of elements with all the words in the string, and will order them in a ascending way</td>
                <td className="ui-td">Limit: Number (default 5) | Offset: Number (default 0)</td>
                <td className="ui-td">wordCounter.orderAscending(offset, limit)</td>
              </tr>
              <tr>
                <td className="ui-td">orderDescending</td>
                <td className="ui-td">This method will return a list of elements with all the words in the string, and will order them in a descending way</td>
                <td className="ui-td">Limit: Number (default 5) | Offset: Number (default 0)</td>
                <td className="ui-td">wordCounter.orderAscending(offset, limit)</td>
              </tr>
              <tr>
                <td className="ui-td">search</td>
                <td className="ui-td">This method will return the word searched as an Object</td>
                <td className="ui-td">Word: String (Required)</td>
                <td className="ui-td">wordCounter.search(word)</td>
              </tr>
              <tr>
                <td className="ui-td">update</td>
                <td className="ui-td">This method should update the string</td>
                <td className="ui-td">String: String (Required)</td>
                <td className="ui-td">wordCounter.update(string)</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    );
  }
}

module.exports = App;
