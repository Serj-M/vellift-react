import React from 'react';
import dataDetail from '../data.js';

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
    for(let p in dataDetail)
      if (dataDetail[p]['id'] == id)
        return p
  }

  render (){
    let items = [], j, sum = 0;
    for(let i in this.props.items){
      //console.log(i + " =  " + this.props.items[i] + " ("  + this.getIndexById(i) + ") ")
      j = this.getIndexById(i)
      sum += this.props.items[i] * dataDetail[j]['price']
      items.push(
        <div key={dataDetail[j]['id']} className="basket-item">
          <a href="#">«{dataDetail[j]['title']}»</a>
          <span>{this.props.items[i]}шт</span>
          <a href="#" onClick={this.deleteBasketItem} id={i}>Удалить</a>
        </div>
      );
	  }

    return <div className='basket'>
        <h3>Ваш список запчастей</h3>
        {items}
      </div>;
  }
}
