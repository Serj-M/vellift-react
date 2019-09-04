import React from 'react';
import dataDetail from '../data.js';
let forCf7 = [];
import axios from 'axios';

export default class Basket extends React.Component {
  constructor(props) {
  	super(props);
  	this.deleteBasketItem = this.deleteBasketItem.bind(this);
    this.plusClick = this.plusClick.bind(this);
    this.minusClick = this.minusClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.myAjax = this.myAjax.bind(this);
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

  myAjax(e) {
    e.preventDefault();
    console.log('Массив объектов для передачи в cf7 (из myAjax в Basket): ', forCf7);

    //const axios = require('axios');
    // axios.get('http://web4hotel.ru/wp-admin/admin-ajax.php', {
    //     params: {
    //       action: 'my_action',
    //       test1: 'test123'
    //     }
    //  })

    axios.post('http://web4hotel.ru/wp-admin/admin-ajax.php?action=react', {
          arrObj: forCf7
      })
        .then(function (response) {
          console.log('Ajax response (myAjax в basket)', response);
      })
        .catch(function (error) {
          console.log('Ajax error (myAjax в basket)', error);
      });

    // // 1. Создаём новый XMLHttpRequest-объект
    // let xhr = new XMLHttpRequest();
    // let data = JSON.stringify({
		// 	action: 'react',
    //   test1: '123'
		// });
    //
    // // 2. Настраиваем его: GET-запрос по URL /article/.../load
    // xhr.open('POST', 'http://web4hotel.ru/wp-admin/admin-ajax.php?action=react');
    // //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //
    // // 3. Отсылаем запрос
    // xhr.send(data);
    //
    // // 4. Этот код сработает после того, как мы получим ответ сервера
    // xhr.onload = function() {
    //   if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    //     alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    //   } else { // если всё прошло гладко, выводим результат
    //     alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
    //   }
    // };
    //
    // xhr.onprogress = function(event) {
    //   if (event.lengthComputable) {
    //     alert(`Получено ${event.loaded} из ${event.total} байт`);
    //   } else {
    //     alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
    //   }
    //
    // };
    //
    // xhr.onerror = function() {
    //   alert("Запрос не удался");
    // };
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
        id: counter+1,
        idDataDetail: i,
        winch: dataDetail[j]['winch'],
        name: dataDetail[j]['title'],
        amount: this.props.items[i]
      }

      hr = (counter) ? <hr style={{margin:'7px 0 6px 0'}}/> : null;
      counter++;

      items.push(
        <div key={dataDetail[j]['id']} className="basket-item" style={{ fontSize:'0.9em' }}>
          {hr}
          <span>{dataDetail[j]['winch']} : </span>
          <span>{dataDetail[j]['title']}</span>
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
      <div className="basket-div">
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
              <button type="button" className="btn btn-primary" onClick={this.myAjax} style={{ fontSize:'0.9rem' }}>Отправить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
