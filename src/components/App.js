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
//import Autosuggest from 'react-autosuggest';

class App extends React.Component {
  constructor(props) {
	  super(props);
    this.state = {
      isChecked: true,
      value: 'All',
      valueRadio: '',
      dataDetail: dataDetail,
      selectDataDetail: [],
      items: {}
    };
    this.addBasket = this.addBasket.bind(this);
    this.removeBasket = this.removeBasket.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
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
    console.log(value);
    // изменение состояния списка запчастей для компанента Radio
    //this.handleRadioChange('Все запчасти');
  }

  handleRadioChange(valueRadio) {
    this.setState(
      {
        valueRadio,
        // если true, активным становиться Radio у кторого value = 'Все запчасти'
        isChecked: (valueRadio == 'Все запчасти') ? true : false
      },
      //() => {console.log(`handleRadioChange = valueRadio ${valueRadio}, isChecked ${this.state.isChecked} `);}
    )
  }

  render(){
    //const value = this.state.value;
    let details, toggle, radioDataDetail=[];
    console.log(this.state.valueRadio);

    if (this.state.value != 'All') {
      toggle = false;
      if ( this.state.valueRadio == 'Все запчасти' ) {
        radioDataDetail = this.state.selectDataDetail;
        //console.log(`render radioDataDetail ${radioDataDetail} this.state.selectDataDetail ${this.state.selectDataDetail}`);
      } else {
        radioDataDetail = this.state.selectDataDetail.filter(obj => {
          return obj.consist == this.state.valueRadio;
        });
        //console.log(`render = radioDataDetail ${radioDataDetail} this.state.selectDataDetail ${this.state.selectDataDetail}`);
      };
      details = radioDataDetail.map(item => {
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
                                   toggle = true;
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
    console.log(details);

    return <div>
      <Basket
        items={this.state.items}
        handleRemoveBasket={this.removeBasket}
      />
      <br/>
      <Select value={this.state.value} onChange={this.handleSelectChange}/>
      <br/>
      <fieldset disabled={toggle}>
        <Radio checked={this.state.isChecked} value={this.state.valueRadio} onChange={this.handleRadioChange}/>
        <br/>
        <Input/>
      </fieldset>
      <hr/><br/>
      <div className = "row">
        {details}
      </div>
      <br/><br/><br/><br/><hr/>
    </div>;
  }
}

export default App;
