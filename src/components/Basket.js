import React from 'react';
import dataDetail from '../data.js';

export default class Basket extends React.Component {
  constructor(props) {
  	super(props);
  	this.deleteBasketItem = this.deleteBasketItem.bind(this);
    this.plusClick = this.plusClick.bind(this);
    this.minusClick = this.minusClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    //e.preventDefault();
    const handleBasketInput = this.props.handleBasketInput;
    const i = e.target.id;
    const v = e.target.value;
    handleBasketInput(i, v);
  }

  plusClick(e) {
    e.preventDefault();
    const handleBasketPlus = this.props.handleBasketPlus;
    const i = e.target.id;
    handleBasketPlus(i);
  }

  minusClick(e) {
    e.preventDefault();
    const handleBasketMinus = this.props.handleBasketMinus;
    const i = e.target.id;
    handleBasketMinus(i);
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
      if (dataDetail[p]['id'] == id) {
        //console.log('getIndexById в Basket.js: ', p);
        return p;
      }
  }

  render (){
    let items = [], j, counter = 0, sum = 0, hr, amount2;
    for(let i in this.props.items){
      hr = (counter) ? <hr style={{margin:'7px 0 6px 0'}}/> : null;
      counter++;
      console.log(i + " =  " + this.props.items[i] + " ("  + this.getIndexById(i) + ") ");
      j = this.getIndexById(i);
      //amount2 = this.
      //sum += this.props.items[i] * dataDetail[j]['price']
      items.push(
        <div key={dataDetail[j]['id']} className="basket-item" style={{ fontSize:'0.9em' }}>
          {hr}
          <span>{dataDetail[j]['title']}</span>
          <span style={{whiteSpace:'pre'}} >
            <a onClick={this.minusClick} id={i} className='plusminus'> &#8595; </a>
              <input
                className="form-control-sm"
                type='text'
                autoComplete='off'
                style={{width:'24px', height:'22px'}}
                id={i}
                value={this.props.items[i]}
                onChange={this.handleInput}
              />
            <a onClick={this.plusClick} id={i} className='plusminus'> &#8593; </a>шт
          </span>
          <a href="#" onClick={this.deleteBasketItem} id={i} style={{color:'red', textDecoration:'none',  float:'right'}}>&#10006;</a>
        </div>
      );
	  }

    return <div>
      <button type="button" className="btn btn-primary basket" data-toggle="modal" data-target="#exampleModal">
        Ваш список запчастей ({counter})
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ваш список запчастей</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {items}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{ fontSize:'0.9rem' }}>Продолжить выбор</button>
              <button type="button" className="btn btn-primary" style={{ fontSize:'0.9rem' }}>Отправить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
