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
      value: 'All',
      isChecked: true,
      valueRadio: 'Все запчасти',
      dataDetail: dataDetail,
      //newDataDetail: [],
      selectDataDetail: [],
      radioDataDetail: [],
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
    // изменение состояния списка деталей лкбедки
    this.setState({
        value,
        selectDataDetail: this.state.dataDetail.filter(obj => {
          //console.log(obj);
          return obj.winch == value.toLowerCase();
        }),
      },
      () => { console.log(this.state.selectDataDetail) }
    );
    console.log(value);
    // изменение состояния списка запчастей для компанента Radio
    this.handleRadioChange('Все запчасти');
  }

  handleRadioChange(valueRadio) {
    // изменение состояния компонента Select
    //this.setState({ valueRadio });
    console.log(valueRadio);
    // изменение состояния списка запчастей
    if ( valueRadio == 'Все запчасти' ) {
      this.setState(
        {
          valueRadio,
          radioDataDetail: this.state.selectDataDetail,
          isChecked: true
        },
        () => { console.log(this.state.radioDataDetail) }
      );
    } else {
      this.setState(
        {
          valueRadio,
          // формирование нового массива со списком деталей для выбранного Блока деталей
          radioDataDetail: this.state.selectDataDetail.filter(obj => {
            //console.log(obj);
            return obj.consist == valueRadio;
          }),
          isChecked: false
        },
        () => { console.log(this.state.radioDataDetail) }
      );
    }
  }

  render(){
    //const value = this.state.value;
    let details;
    if (this.state.value != 'All') {
      details = this.state.radioDataDetail.map(item => {
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
      <Select value={this.state.value} onChange={this.handleSelectChange}/>
      <br/>
      <Radio checked={this.state.isChecked} value={this.state.valueRadio} onChange={this.handleRadioChange}/>
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
