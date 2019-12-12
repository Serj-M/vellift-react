import React from 'react';

export default class Radio extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(ev) {
    this.props.onChange(ev.target.value);
  }

  render(){
    //const value = this.props.value;
    const checked = this.props.checked;
    //console.log(`из Radio. checked = ${checked}`);
    return <div>
      <div className="custom-control custom-radio custom-control-inline">
        <input checked={checked} value="Все запчасти" type="radio" name="choice" id="A" onChange={this.handleChange} className="custom-control-input" />
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
      <div className="custom-control custom-radio custom-control-inline">
        <input value="Лебедка" type="radio" name="choice" id="D" onChange={this.handleChange} className="custom-control-input" />
        <label className="custom-control-label" htmlFor="D">Лебедка</label>
      </div>
      <div className="custom-control custom-radio custom-control-inline">
        <input value="Рама" type="radio" name="choice" id="E" onChange={this.handleChange} className="custom-control-input" />
        <label className="custom-control-label" htmlFor="E">Рама</label>
      </div>
    </div>
  }
}
