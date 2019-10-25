import React from 'react';

export default class Detail extends React.Component {
  constructor(props) {
	  super(props);
    this.state = {selected: false};
    this.handleClick = this.handleClick.bind(this);
    this.addBasketDetail = this.addBasketDetail.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    //alert('test');
    this.setState({selected: !this.state.selected}); //переключает true/false
  }

  addBasketDetail(e){
    e.preventDefault();
    const handleAddBasket = this.props.handleAddBasket;
    handleAddBasket(this.props.id);

    let selectedEffect = document.getElementById('selected-detail');
    // Добавляет эффект кнопки Список ваших запчастей при нажатии
    selectedEffect.classList.add('my-show-detail');
  }

  render(){
    return <div className={"card md-3 "+(this.state.selected ? "detail-selected" : "detail-default")} >
      <div className="row no-gutters">
        <div className="col-md-5">
          <img src={this.props.img} className="card-img" alt=""/>
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h3 className="card-title" style={{ textAlign:'center' }}>{this.props.title}</h3>
            <hr />
            <p className="card-text"><strong>Описание: </strong>{this.props.description}</p>
            <p className="card-text"><strong>Тип лебедки: </strong>{this.props.type}<br/><strong>Блок детали: </strong>{this.props.consist}</p>
            <div className="text-right">
              <a href="#" className="btn btn-primary" onClick={this.addBasketDetail}>Узнать стоимость</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
