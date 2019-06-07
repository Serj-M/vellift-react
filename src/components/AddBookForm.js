import React from 'react';
//import dataBook from '../data.js';

export default class AddBookForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           id: '',
           title: '',
           author: '',
           price: ''
         };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // нужно добавить проверку, существует ли книга с таким id

  isValidBook(book){
    console.log(book) //только для проверки
    //return book.id && book.title && book.author && true //аналогчно if
    if (book.id && book.title && book.author )
        return true;
    return false;
  }

  handleSubmit(event) {
    event.preventDefault();
    //alert("test");
    if( this.isValidBook(this.state) ){
      //dataBook.push(this.state); //Не нужен, так как добавляем на страницу миную массив
      this.props.onSubmit(this.state); //всплытие состояния
      this.setState({ id: '', title: '', author: '', price: '' }); // для очистки формы
      //console.log(dataBook); //только для проверки
    } else alert("Заполните поля корректно")
  }

  handleChange(ev) {
    // const input = {};
    // input[ev.target.name] = ev.target.value;
    // this.setState(input);
    this.setState({[ev.target.name]: ev.target.value});
    // console.log(input);
  }

  render(){
    return(
      <form action="" onSubmit={this.handleSubmit}>
        <div>id <input type="text" name="id" onChange={this.handleChange} value={this.state.id} /></div>
        <div>Название <input type="text" name="title" onChange={this.handleChange} value={this.state.title} /></div>
        <div>Авторы <input type="text" name="author" onChange={this.handleChange} value={this.state.author} /></div>
        <div>Цена <input type="text" name="price" onChange={this.handleChange} value={this.state.price} /></div>
        <div><input type="submit" value="Добавить" /></div>
      </form>
    )
  }
}
