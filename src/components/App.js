import React from 'react';
import dataBook from '../data.js';
import Book from './Book.js';
import BookWithoutPrice from './BookWithoutPrice.js';
import AddBookForm from './AddBookForm.js';
import Basket from './Basket.js';
import '../styles/index.css';

class App extends React.Component {
  constructor(props) {
	  super(props);
    this.state = {
      dataBook: dataBook,
      items: {}
    };
    this.updateBooks = this.updateBooks.bind(this);
    this.addBasket = this.addBasket.bind(this);
    this.removeBasket = this.removeBasket.bind(this);
  }

  addBasket(id){
     let items = Object.assign({}, this.state.items);
     items[id] = (id in items) ? items[id]+1 : 1;
     console.log(items);
     this.setState({ items: items});
   }

  updateBooks(newBook){
    const tmp = this.state.dataBook;
    tmp.push(newBook);
    this.setState({dataBook: tmp});
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

    const books = dataBook.map(item => {
                                 return item.price ?
                                   <Book
                                     id={item["id"]}
                                     title={item["title"]}
                                     author={item["author"]}
                                     price={item["price"]}
                                     key={item.id}
                                     handleAddBasket={this.addBasket}
                                   /> :
                                   <BookWithoutPrice
                                     title={item["title"]}
                                     author={item["author"]}
                                     price={item["price"]}
                                     key={item.id}
                                   />
                               });
    return <div>
      <Basket
        items={this.state.items}
        handleRemoveBasket={this.removeBasket}
      />
      <hr/><br/>
      <AddBookForm onSubmit={this.updateBooks} />
      <br/><hr/>
      {books}
      <br/><br/><br/><br/><hr/>
    </div>;
  }
}

export default App;
