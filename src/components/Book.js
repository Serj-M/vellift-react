import React from 'react';
//import dataBook from '../data.js';

export default class Book extends React.Component {
  constructor(props) {
	  super(props);
    this.state = {selected: false};
    this.handleClick = this.handleClick.bind(this);
    this.addBasketBook = this.addBasketBook.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    //alert('test');
    this.setState({selected: !this.state.selected}); //переключает true/false
  }

  addBasketBook(e){
    e.preventDefault();
    const handleAddBasket = this.props.handleAddBasket;
    handleAddBasket(this.props.id)
  }
  // componentDidMount() {
  //  console.log('--','компонент смонтирован')
  // }
  // componentWillUnmount() {
  //  console.log('--','компонент будет демонтирован')
  // }
  render(){
    const price = this.props.price ? <strong>{this.props.price}</strong> : <del>&nbsp;</del>;
    return <div className={"card col-xl-4 col-lg-4 col-sm-12 book "+(this.state.selected ? "book-selected" : "book-default")} >
        <h3>{this.props.title}</h3>
        <img src={'http://placehold.it/100x120?text='+this.props.title} alt="" />
        <p>Автор: {this.props.author}</p>
        <p>Цена: {price} руб.</p>
        <a href="#" onClick={this.handleClick}>Сравнить</a>&nbsp;&nbsp;&nbsp;
        <a href="#" onClick={this.addBasketBook}>В корзину</a>
      </div> ;
  }
}
