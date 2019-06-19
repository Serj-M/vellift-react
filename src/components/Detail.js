import React from 'react';

export default class Detail extends React.Component {
  constructor(props) {
	  super(props);
    this.state = {selected: false};
    this.handleClick = this.handleClick.bind(this);
    this.addBasketDetail = this.addBasketDetail.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    //alert('test');
    this.setState({selected: !this.state.selected}); //переключает true/false
  }

  addBasketDetail(e){
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
    return <div className={"card col-xl-4 col-lg-4 col-sm-12 "+(this.state.selected ? "detail-selected" : "detail-default")} >
        <h3>{this.props.title}</h3>
        <img src={'http://placehold.it/100x120?text='+this.props.title} alt="" />
        <p>Автор: {this.props.author}</p>
        <p>Цена: {price} руб.</p>
        <a href="#" onClick={this.handleClick}>Сравнить</a>&nbsp;&nbsp;&nbsp;
        <a href="#" onClick={this.addBasketDetail}>В корзину</a>
      </div>;
  }
}
