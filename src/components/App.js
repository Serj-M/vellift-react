import React from 'react';
import dataDetail from '../data.js';
import Detail from './Detail.js';
import Select from './Select.js';
import Radio from './Radio.js';
import Basket from './Basket.js';
import '../styles/index.css';
import Search from './Search.js';
import { inputProps } from './Search.js';
export let arrFiltered = [];

export default class App extends React.Component {
  constructor(props) {
	  super(props);
    this.state = {
      isChecked: true,
      value: 'All',
      valueRadio: '',
      valueSearch: '',
      dataDetail: dataDetail,
      selectDataDetail: [],
      items: {}
    };
    this.addBasket = this.addBasket.bind(this);
    this.handleBasketInput = this.handleBasketInput.bind(this);
    this.handleBasketPlus = this.handleBasketPlus.bind(this);
    this.handleBasketMinus = this.handleBasketMinus.bind(this);
    this.handleRemoveBasket = this.handleRemoveBasket.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.searchRef = React.createRef();
  }

  addBasket (id){
    let items = Object.assign({}, this.state.items);
    //items[id] = (id in items) ? items[id]+1 : 1;
    items[id] = 1;
    //console.log('addBasket в App.js', items);
    this.setState({ items: items });
  }

  handleBasketInput (id, value) {
    let items = Object.assign({}, this.state.items);
    //items[id] = (id in items) ? +value : 1;
    if (id in items) {
      //items[id] = ((!isNaN(value)) && (value != 0)) ? +value : '';
      if ((!isNaN(value)) && (value != 0)) {
        if (value >= 99) {
          items[id] = 99;
        } else {
          items[id] = +value;
        }
      } else {
        items[id] = '';
      }
    } else {
      items[id] = 1;
    }
    //console.log('handleBasketInput в App.js', items, value);
    this.setState({ items: items });
  }

  handleBasketPlus (id) {
    let items = Object.assign({}, this.state.items);
    //items[id] = (id in items) ? items[id]+1 : 1;
    if (id in items) {
      if (items[id] != '') {
        if (items[id] >= 99) {
          items[id] = 99;
        } else {
          items[id] = items[id]+1;
        }
      } else {
        items[id] = 1;
      }
    }
    //console.log('handleBasketPlus в App.js', items);
    this.setState({ items: items });
  }

  handleBasketMinus (id) {
    let items = Object.assign({}, this.state.items);
    if (id in items) {
      items[id] = ((items[id] !== 1) && (items[id] != '')) ? items[id]-1 : 1;
    }
    //console.log('handleBasketMinus в App.js', items);
    this.setState({ items: items });
  }

  handleRemoveBasket (id){
    //let items = this.state.items.slice(0), result = [];
    let items = Object.assign({}, this.state.items);;
    let result = [];
    for(let i in items )
          if(i != id)
            result[i] = items[i]
    // console.log("Удаляем ", id)
    // console.log("Исходный ", items)
    // console.log("Результирующий ", result)
    this.setState({items: result});
  }

  handleSelectChange(value) {
    // очистка поиска детали при выборе новой лебедки
    this.searchRef.current.clearSearch();
    inputProps.value = '';
    // console.log('Поиск деталей (из handleSelectChange в App): ', inputProps.value);
    let collapsed = document.getElementById('collapseId');
    if ( value != 'All' ) {
      collapsed.classList.add('my-show') // Показывает скрываемые элементы Radio и Поиск (метод Bootstrap-4)
    } else {
      collapsed.classList.remove('my-show') // Cкрывает элементы Radio и Поиск (метод Bootstrap-4)
    }

    // изменение состояния списка деталей лкбедки
    this.setState({
        value,
        valueRadio: 'Все запчасти',
        isChecked: true,
        selectDataDetail: this.state.dataDetail.filter(obj => {
          //console.log(obj);
          return obj.winch.toLowerCase() == value.toLowerCase();
        }),
      }
    );
    // console.log('Тип лебедки (из handleSelectChange в App): ', value);

    // изменение состояния списка запчастей для компанента Radio
    //this.handleRadioChange('Все запчасти');
  }

  handleRadioChange(valueRadio) {
    // очистка поиска детали при выборе нового блока деталей
    this.searchRef.current.clearSearch();
    inputProps.value = '';
    //console.log('Поиск деталей (из handleRadioChange в App): ', inputProps.value);

    this.setState(
      {
        valueRadio,
        // если true, активным становиться Radio у которого value = 'Все запчасти'
        isChecked: (valueRadio == 'Все запчасти') ? true : false
      },
      //() => {console.log(`handleRadioChange = valueRadio ${valueRadio}, isChecked ${this.state.isChecked} `);}
    );
  }

  handleSearchClick() {
    this.setState({ valueSearch: inputProps.value },
    //() => {console.log('Поиск детали (из handleSearchClick в App): ', this.state.valueSearch);}
    );
  }

  render(){
    let details, toggleFieldset, renderDataDetail=[];
    // console.log('Блок деталей (из render в App): ', this.state.valueRadio);
    // console.log('Поиск деталей (из render в App): ', inputProps.value);

    // проверяем выбран ли Тип лебедки
    if (this.state.value != 'All') {
      // значит выбран Тип лебедки
      //$('.collapse').collapse("show"); // Показывает скрываемые элементы Radio и Поиск (метод Bootstrap-4)
      toggleFieldset = false; // переключатель активности fieldset

      // формирование массива из выбранного типа лебедки для использования в компоненте Search
      let uniq={}, tempArrFiltered=[];
      tempArrFiltered = this.state.selectDataDetail;
      // формирование уникального массива для использования в компоненте Search если не сработает fieldset
      arrFiltered = tempArrFiltered.filter(obj => !uniq[obj.title] && (uniq[obj.title] = true));
      console.log('Массив для поиска (из render в App): ', arrFiltered);

      // Проверяем выбран ли Блок запчастей
      if ( this.state.valueRadio == 'Все запчасти' ) {
        // проверяем введено ли что-то в поиске
        if (inputProps.value === '') {
          renderDataDetail = this.state.selectDataDetail;
          //console.log(`render renderDataDetail ${renderDataDetail} this.state.selectDataDetail ${this.state.selectDataDetail}`);
        } else {
          renderDataDetail = this.state.selectDataDetail.filter(obj => { return obj.title.toLowerCase().includes(inputProps.value.trim().toLowerCase()); });
          //console.log(`render renderDataDetail ${renderDataDetail} this.state.selectDataDetail ${this.state.selectDataDetail}`);
        }
      } else {
        // значит Блок запчастей выбран

        // формирование массива из выбранного блока деталей для использования в компоненте Search
        let uniq={}, tempArrFiltered=[];
        tempArrFiltered = this.state.selectDataDetail.filter(obj => { return obj.consist == this.state.valueRadio; });
        // формирование уникального массива для использования в компоненте Search если не сработает fieldset
        arrFiltered = tempArrFiltered.filter(obj => !uniq[obj.title] && (uniq[obj.title] = true));
        console.log('Массив для поиска (из render в App): ', tempArrFiltered);

        // проверяем введено ли что-то в поиске
        if (inputProps.value === '') {
          renderDataDetail = this.state.selectDataDetail.filter(obj => { return obj.consist == this.state.valueRadio; });
          //console.log(`render = renderDataDetail ${renderDataDetail} this.state.selectDataDetail ${this.state.selectDataDetail}`);
        } else {
          let tempDataDetail = this.state.selectDataDetail.filter(obj => { return obj.consist == this.state.valueRadio; });
          renderDataDetail = tempDataDetail.filter(obj => { return obj.title.toLowerCase().includes(inputProps.value.trim().toLowerCase()); })
        }
      };
      details = renderDataDetail.map(item => {
                                   return <Detail
                                       id={item["id"]}
                                       title={item["title"]}
                                       description={item["description"]}
                                       type={item["type"]}
                                       consist={item["consist"]}
                                       img={item["img"]}
                                       key={item.id}
                                       handleAddBasket={this.addBasket}
                                     />
                                 });
    } else {
      // значит Тип лебедки не выбран
      // формирование уникального массива для использования в компоненте Search если не сработает fieldset
      //arrFiltered = dataDetail.filter(obj => !uniq[obj.title] && (uniq[obj.title] = true));
      //console.log('Массив для поиска (из render в App): ', arrFiltered);

      //$('.collapse').collapse("hide"); // скрывает элементы Radio и Поиск (метод Bootstrap-4)
      toggleFieldset = true;
      details = dataDetail.map(item => {
                                   this.state.isChecked = true;
                                   return <Detail
                                       id={item["id"]}
                                       title={item["title"]}
                                       description={item["description"]}
                                       type={item["type"]}
                                       consist={item["consist"]}
                                       img={item["img"]}
                                       key={item.id}
                                       handleAddBasket={this.addBasket}
                                     />
                                 });
    }
    // console.log('Детали для отрисовки (из render в App): ', details, details.length);
    if (details.length === 0) { details = 'По Вашему запросу ничего не найдено. Уточните выбор.'};

    return <div>
      <Basket
        items={this.state.items}
        handleRemoveBasket={this.handleRemoveBasket}
        handleBasketPlus={this.handleBasketPlus}
        handleBasketMinus={this.handleBasketMinus}
        handleBasketInput={this.handleBasketInput}
      />
      <br/>
      <Select value={this.state.value} onChange={this.handleSelectChange} />
      <br/>
      <div className="mycollapse" id="collapseId">
        {/*<fieldset disabled={toggleFieldset}>*/}
          <Radio checked={this.state.isChecked} value={this.state.valueRadio} onChange={this.handleRadioChange}/>
          <br/>
          <div>
            <div className="row no-gutters">
              <div className="col">
                <Search ref={this.searchRef} />
              </div>
              <div className="col-3 col-sm-2 col-md-1">
                <button onClick={this.handleSearchClick} className="btn btn-primary" type="button">Искать</button>
              </div>
            </div>
          </div><br/>
        {/*</fieldset>*/}
      </div>
      <hr/><br/>
      <div className = "row">
        {details}
      </div>
      <br/><hr/>
    </div>;
  }
}
