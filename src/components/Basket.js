import React from 'react';
import dataBook from '../data.js';

export default class Basket extends React.Component {
  constructor(props) {
	super(props);
	this.deleteBasketItem = this.deleteBasketItem.bind(this);
  }

  deleteBasketItem(e){
    e.preventDefault();
    const handleRemoveBasket = this.props.handleRemoveBasket;
    const i = e.target.id;
    //if(confirm("Точно хотите удалить?"));
    handleRemoveBasket(i);
  }

  getIndexById(id){
    for(let p in dataBook)
      if (dataBook[p]['id'] == id)
        return p
  }

  render (){
    let items = [], j, sum = 0;
    for(let i in this.props.items){
      //console.log(i + " =  " + this.props.items[i] + " ("  + this.getIndexById(i) + ") ")
      j = this.getIndexById(i)
      sum += this.props.items[i] * dataBook[j]['price']
      items.push(
        <div key={dataBook[j]['id']} className="basket-item">
          <a href="#">«{dataBook[j]['title']}»</a>
          <span>{this.props.items[i]}шт</span>
          <span>{dataBook[j]['price']}руб</span>
          <a href="#" onClick={this.deleteBasketItem} id={i}>Удалить</a>
        </div>
      );
	  }

    items.push(
        <div key={sum} className="basket-item">
          <span>Всего <strong>{sum}</strong> руб.</span>
        </div>
      );

    return <div className='basket'>
        <h3>Корзина</h3>
        {items}
      </div>;
  }
}
