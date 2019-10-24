import React from 'react';
import Autosuggest from 'react-autosuggest';
import '../styles/search.css'
import { arrFiltered } from './App.js';
export let inputProps = {};

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());
  if (escapedValue === '') {
    return [];
  }
  const regex = new RegExp(escapedValue, 'i');
  return arrFiltered.filter(data => regex.test(getSuggestionValue(data)));
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => {
  return suggestion.title;
}

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.title}
  </div>
);

export default class Search extends React.Component {
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
    this.clearSearch = this.clearSearch.bind(this);
    this.clearSearchFocus = this.clearSearchFocus.bind(this);
  };

  clearSearch() {
    //this.input.focus();
    this.setState(
      { value: '' },
      //() => {console.log('Поиск очищен (из clearSearch в Search) :', this.state.value)}
    )
  }

  clearSearchFocus() {
    this.setState(
      { value: '' },
      //() => {console.log('Поиск очищен (из clearSearch в Search) :', this.state.value)}
    );
    //this.input.focus();
    document.getElementById('input01').focus();
  }

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
        id="input01"
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
    inputProps = {
      //placeholder: 'Начните вводить название детали ...',
      value,
      onChange: this._onChange
    };
    //console.log(inputProps.value);

    let clearButton;
    if (value.length >= 1) {
      clearButton = (
        <button onClick={this.clearSearchFocus} type="button" className="close">
          <label htmlFor="input01" aria-hidden="true" style={{cursor: 'pointer'}}>&times;</label>
        </button>
      );
    }

    // Finally, render it!
    return (
      <div className="mySearch">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this._onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this._onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderInputComponent={this._renderInputComponent}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        {clearButton}
      </div>
    );
  }
}
