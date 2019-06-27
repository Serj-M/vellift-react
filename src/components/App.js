import React from 'react';
import dataDetail from '../data.js';
import Detail from './Detail.js';
import DetailWithoutPrice from './DetailWithoutPrice.js';
import AddDetailForm from './AddDetailForm.js';
import Basket from './Basket.js';
import '../styles/index.css';

class App extends React.Component {
  constructor(props) {
	  super(props);
    this.state = {
      dataDetail: dataDetail,
      items: {}
    };
    this.updateDetails = this.updateDetails.bind(this);
    this.addBasket = this.addBasket.bind(this);
    this.removeBasket = this.removeBasket.bind(this);
  }

  addBasket(id){
     let items = Object.assign({}, this.state.items);
     items[id] = (id in items) ? items[id]+1 : 1;
     console.log(items);
     this.setState({ items: items});
   }

  updateDetails(newDetail){
    const tmp = this.state.dataDetail;
    tmp.push(newDetail);
    this.setState({dataDetail: tmp});
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

  render(){

    const details = dataDetail.map(item => {
                                 return <Detail
                                     id={item["id"]}
                                     title={item["title"]}
                                     description={item["description"]}
                                     type={item["type"]}
                                     consist={item["consist"]}
                                     author={item["author"]}
                                     price={item["price"]}
                                     key={item.id}
                                     handleAddBasket={this.addBasket}
                                   />
                               });
    return <div>
      <Basket
        items={this.state.items}
        handleRemoveBasket={this.removeBasket}
      />
      <hr/><br/>
      <AddDetailForm onSubmit={this.updateDetails} />
      <br/><hr/>
      <div className = "row">
        {details}
      </div>
      <br/><br/><br/><br/><hr/>
    </div>;
  }
}

export default App;
