//<script src="https://unpkg.com/react-autosuggest/dist/standalone/autosuggest.js"></script>
import React from 'react';
import Autosuggest from 'react-autosuggest';
import '../styles/search.css'

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'Cc++',
    year: 1983
  },
  {
    name: 'Cclojure',
    year: 2007
  },
  {
    name: 'Сборка пружин тормоза',
    year: 2012
  },
  {
    name: 'Ограничитель сбрасывания канатов 123456789',
    year: 2009
  },
  {
    name: 'Ограничитель 2сбрасывания канатов 123456789',
    year: 2009
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class Search extends React.Component {
  constructor(props) {
    super(props);
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
    this._onChange = this._onChange.bind(this);
    this._onSuggestionsFetchRequested = this._onSuggestionsFetchRequested.bind(this);
    this._onSuggestionsClearRequested = this._onSuggestionsClearRequested.bind(this);
    this._renderInputComponent = this._renderInputComponent.bind(this);
  };

  // For when a user types into the search box
  _onChange(event, { newValue }) {
    this.setState({ value: newValue });
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  _onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  _onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  _renderInputComponent(inputProps) {
    const { className, ...other } = inputProps;
    return (
      <input
        className="form-control"
        type="search"
        placeholder="Поиск детали"
        {...other}
      />
    );
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      //placeholder: 'Начните вводить название детали ...',
      value,
      onChange: this._onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this._onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this._onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderInputComponent={this._renderInputComponent}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Search
