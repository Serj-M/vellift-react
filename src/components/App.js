import React from 'react';
import dataDetail from '../data.js';
import Detail from './Detail.js';
import Select from './Select.js';
import Input from './Input.js';
import Radio from './Radio.js';
import DetailWithoutPrice from './DetailWithoutPrice.js';
import AddDetailForm from './AddDetailForm.js';
import Basket from './Basket.js';
import '../styles/index.css';

class App extends React.Component {
  constructor(props) {
	  super(props);
    this.state = {
      //changeSelect: false,
      value: '',
      valueRadio: '',
      dataDetail: dataDetail,
      newDataDetail: [],
      items: {}
    };
    this.updateDetails = this.updateDetails.bind(this);
    this.addBasket = this.addBasket.bind(this);
    this.removeBasket = this.removeBasket.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  addBasket(id){
    let items = Object.assign({}, this.state.items);
    items[id] = (id in items) ? items[id]+1 : 1;
    //console.log(items);
    this.setState({ items: items });
   }

  updateDetails(newDetail){
    const tmp = this.state.dataDetail;
    tmp.push(newDetail);
    this.setState({ dataDetail: tmp });
    console.log(dataDetail);
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
    // изменение состояния компонента Select
    this.setState({ value });
    console.log(value);
    // формирование нового массива со списком деталей для выбранной лебедки
    this.state.newDataDetail = dataDetail.filter(obj => {
      //console.log(obj);
      return obj.winch == value.toLowerCase();
    });
    // изменение состояния списка деталей лкбедки
    this.setState({ dataDetail: this.state.newDataDetail }, () => {
        console.log(this.state.dataDetail);
    });
  }

  handleRadioChange(valueRadio) {
    // изменение состояния компонента Select
    this.setState({ valueRadio });
    console.log(valueRadio);
    // формирование нового массива со списком деталей для выбранного Блока деталей
    let radioDataDetail = this.state.newDataDetail.filter(obj => {
      console.log(obj);
      return obj.consist == valueRadio;
    });
    // изменение состояния списка Блока деталей
    this.setState({ dataDetail: radioDataDetail }, () => {
        console.log(this.state.dataDetail);
    });
  }

  render(){
    const value = this.state.value;
    let details;
    if (this.state.value != 'All') {
      details = this.state.dataDetail.map(item => {
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

    return <div>
      <Basket
        items={this.state.items}
        handleRemoveBasket={this.removeBasket}
      />
      {/*hr/><br/>
      <AddDetailForm onSubmit={this.updateDetails} />
      <br/><hr/>*/}
      <br/>
      <Select value={value} onChange={this.handleSelectChange}/>
      <br/>
      <Radio value={value} onChange={this.handleRadioChange}/>
      <br/>
      <Input/>
      <br/><hr/>
      <div className = "row">
        {details}
      </div>
      <br/><br/><br/><br/><hr/>
    </div>;
  }
}

export default App;
