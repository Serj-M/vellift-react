import React from 'react';
import dataDetail from '../data.js';
import Detail from './Detail.js';
import Select from './Select.js';
import Radio from './Radio.js';
//import DetailWithoutPrice from './DetailWithoutPrice.js';
//import AddDetailForm from './AddDetailForm.js';
import Basket from './Basket.js';
import '../styles/index.css';
import Search from './Search.js';
//import { render } from "react-dom";
import { inputProps } from './Search.js';
export let arrFiltered = [];

export default class App extends React.Component {
  constructor(props) {
	  super(props);
    this.state = {
      isChecked: true,
      value: 'All',
      valueRadio: '',
      //valueSearch: '',
      dataDetail: dataDetail,
      selectDataDetail: [],
      items: {}
    };
    this.addBasket = this.addBasket.bind(this);
    this.removeBasket = this.removeBasket.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  addBasket (id){
    let items = Object.assign({}, this.state.items);
    items[id] = (id in items) ? items[id]+1 : 1;
    //console.log(items);
    this.setState({ items: items });
   }

  removeBasket (id){
    //let items = this.state.items.slice(0), result = [];
    let items = Object.assign({}, this.state.items);;
    let result = [];
    for(let i in items )
          if(i != id)
            result[i] = items[i]
    /*console.log("Удаляем ", id)
    console.log("Исходный ", items)
    console.log("Результирующий ", result)*/
    this.setState({items: result});
  }

  handleSelectChange(value) {
    // изменение состояния списка деталей лкбедки
    this.setState({
        value,
        valueRadio: 'Все запчасти',
        isChecked: true,
        selectDataDetail: this.state.dataDetail.filter(obj => {
          //console.log(obj);
          return obj.winch == value.toLowerCase();
        }),
      }
    );
    console.log('Тип лебедки (из handleSelectChange в App): ', value);

    // изменение состояния списка запчастей для компанента Radio
    //this.handleRadioChange('Все запчасти');

    let uniq = {};
    arrFiltered = dataDetail.filter(obj => !uniq[obj.title] && (uniq[obj.title] = true));
    //console.log('Исходный массив', dataDetail);
    console.log('Массив объектов без поторений (из handleSelectChange в App): ', arrFiltered);
  }

  handleRadioChange(valueRadio, inputProps) {
    this.setState(
      {
        valueRadio,
        // если true, активным становиться Radio у кторого value = 'Все запчасти'
        isChecked: (valueRadio == 'Все запчасти') ? true : false
      },
      //() => {console.log(`handleRadioChange = valueRadio ${valueRadio}, isChecked ${this.state.isChecked} `);}
    )
  }

  handleSearchClick() {
    console.log('Поиск детали (из handleSearchClick в App): ', inputProps.value);
  }

  render(){
    //const value = this.state.value;
    let details, toggleFieldset, renderDataDetail=[];
    console.log('Блок деталей (из render в App): ', this.state.valueRadio);

    if (this.state.value != 'All') {
      toggleFieldset = false;
      if ( this.state.valueRadio == 'Все запчасти' ) {
        renderDataDetail = this.state.selectDataDetail;
        //console.log(`render renderDataDetail ${renderDataDetail} this.state.selectDataDetail ${this.state.selectDataDetail}`);
      } else {
        renderDataDetail = this.state.selectDataDetail.filter(obj => {
          return obj.consist == this.state.valueRadio;
        });
        //console.log(`render = renderDataDetail ${renderDataDetail} this.state.selectDataDetail ${this.state.selectDataDetail}`);
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
      details = dataDetail.map(item => {
                                   this.state.isChecked = true;
                                   toggleFieldset = true;
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
    console.log('Детали для отрисовки (из render в App): ', details);

    return <div>
      <Basket
        items={this.state.items}
        handleRemoveBasket={this.removeBasket}
      />
      <br/>
      <Select value={this.state.value} onChange={this.handleSelectChange}/>
      <br/>
      <fieldset disabled={toggleFieldset}>
        <Radio checked={this.state.isChecked} value={this.state.valueRadio} onChange={this.handleRadioChange}/>
        <br/>
        <div className="input-group mb-3">
          <Search/>
          <div className="input-group-append ">
            <button onClick={this.handleSearchClick} className="btn btn-primary" type="button">Искать</button>
          </div>
        </div>
      </fieldset>
      <hr/><br/>
      <div className = "row">
        {details}
      </div>
      <br/><br/><br/><br/><hr/>
    </div>;
  }
}
