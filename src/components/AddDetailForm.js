import React from 'react';

export default class AddDetailForm extends React.Component{
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

  // нужно добавить проверку, существует ли деталь с таким id

  isValidDetail(Detail){
    console.log(Detail) //только для проверки
    //return Detail.id && Detail.title && Detail.author && true //аналогчно if
    if (Detail.id && Detail.title && Detail.author )
        return true;
    return false;
  }

  handleSubmit(event) {
    event.preventDefault();
    //alert("test");
    if( this.isValidDetail(this.state) ){
      //dataDetail.push(this.state); //Не нужен, так как добавляем на страницу миную массив
      this.props.onSubmit(this.state); //всплытие состояния
      this.setState({ id: '', title: '', author: '', price: '' }); // для очистки формы
      //console.log(dataDetail); //только для проверки
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
