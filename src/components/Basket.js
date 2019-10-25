import React from 'react';
import dataDetail from '../data.js';
let forCf7 = [];
// import axios from 'axios';

export default class Basket extends React.Component {
  constructor(props) {
  	super(props);
  	this.deleteBasketItem = this.deleteBasketItem.bind(this);
    this.plusClick = this.plusClick.bind(this);
    this.minusClick = this.minusClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.sendСf7Input = this.sendСf7Input.bind(this);
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

  deleteBasketItem(e) {
    e.preventDefault();
    const handleRemoveBasket = this.props.handleRemoveBasket;
    const i = e.target.id;
    let tempArr = forCf7.filter(obj => {return obj.idDataDetail !== i});
    forCf7 = tempArr;
    //if(confirm("Точно хотите удалить?"));
    handleRemoveBasket(i);
  }

  sendСf7Input(e) {
    e.preventDefault();
    // console.log('Массив объектов для передачи в cf7 (из sendСf7Input в Basket): ', forCf7);
    let strForCf7 = '';
    for (let i = 0; i < forCf7.length; i++) {
      strForCf7 += forCf7[i]['str'];
      //alert( strForCf7 );
    }

    if (document.getElementById('cf7Modal')){
      // console.log('cf7Modal запущена (sendСf7Input в basket)', strForCf7);
      document.getElementById('cf7Input').value = strForCf7;
    } else {
      console.log('cf7Modal НЕ запущена (sendСf7Input в basket)');
      setTimeout(() => document.getElementById('cf7Input').value = strForCf7, 1000);
    }

    // axios.post('http://web4hotel.ru/wp-admin/admin-ajax.php?action=react', {
    //       arrObj: forCf7
    //   })
    //     .then(function (response) {
    //       console.log('Ajax response (sendСf7Input в basket)', response);
    //   })
    //     .catch(function (error) {
    //       console.log('Ajax error (sendСf7Input в basket)', error);
    //   });
  }

  getIndexById(id){
    for(let p in dataDetail)
      if (dataDetail[p]['id'] == id) {
        //console.log('getIndexById в Basket.js: ', p);
        return p;
      }
  }

  render (){
    let items = [], j, counter = 0, sum = 0, hr;
    for(let i in this.props.items){
      //console.log(i + " =  " + this.props.items[i] + " ("  + this.getIndexById(i) + ") ");
      j = this.getIndexById(i);

      // формируем массив объектов для передачи в cf7
      forCf7[counter] = {
        // id: counter+1,
        idDataDetail: i,
        // winch: dataDetail[j]['winch'],
        // name: dataDetail[j]['title'],
        // amount: this.props.items[i],
        str: `\n${counter+1} : ${dataDetail[j]['winch'].toLowerCase()} : ${dataDetail[j]['title'].toLowerCase()} : ${dataDetail[j]['designation']} : ${this.props.items[i]} шт.;`
      }

      hr = (counter) ? <hr style={{margin:'7px 0 6px 0'}}/> : null;
      counter++;

      items.push(
        <div key={dataDetail[j]['id']} className="basket-item" style={{ fontSize:'0.9em' }}>
          {hr}
          <span>{dataDetail[j]['winch'].toLowerCase()} : </span>
          <span>{dataDetail[j]['title'].toLowerCase()}</span>
          <span style={{whiteSpace:'pre'}} >
            <a onClick={this.minusClick} id={i} className='plusminus'> &#8595; </a>
              <input
                className="form-control-sm"
                type='text'
                autoComplete='off'
                style={{width:'26px', height:'22px'}}
                id={i}
                value={this.props.items[i]}
                onChange={this.handleInput}
              />
            <a onClick={this.plusClick} id={i} className='plusminus'> &#8593; </a>шт
          </span>
          <a href="#" onClick={this.deleteBasketItem} id={i} className='removebasket'>&times;</a>
        </div>
      );
	  }
    //console.log('Массив объектов для передачи в cf7 (из render в Basket): ', forCf7);

    return <div>
      <div className="basket-div" id="selected-detail">
        <button type="button" className="basket btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Ваш список запчастей ({counter})
        </button>
      </div>
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
              <button type="button" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#cf7Modal" onClick={this.sendСf7Input} style={{ fontSize:'0.9rem' }}>Отправить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
