import React from 'react';

export default class Radio extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(ev) {
    console.log(`из Radio.js ${ev.target.value}`);
    //this.setState({value: ev.target.value});
    this.props.onChange(ev.target.value);
  }

  render(){
    //const value = this.props;
    return <div>
      <div className="custom-control custom-radio custom-control-inline">
        <input defaultChecked value="Все запчасти" type="radio" name="choice" id="A" onChange={this.handleChange} className="custom-control-input" />
        <label className="custom-control-label" htmlFor="A">Все запчасти</label>
      </div>
      <div className="custom-control custom-radio custom-control-inline">
        <input value="Редуктор" type="radio" name="choice" id="B" onChange={this.handleChange} className="custom-control-input" />
        <label className="custom-control-label" htmlFor="B">Редуктор</label>
      </div>
      <div className="custom-control custom-radio custom-control-inline">
        <input value="Тормозная система" type="radio" name="choice" id="C" onChange={this.handleChange} className="custom-control-input" />
        <label className="custom-control-label" htmlFor="C">Тормозная система</label>
      </div>
    </div>
  }
}
