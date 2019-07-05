import React from 'react';

export default class Radio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
           id: 'reductor'
         };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(ev) {
    
  }

  render(){
    //const value = this.props.value;
    return <div>
      <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
        <label className="custom-control-label">Редуктор</label>
      </div>
      <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
        <label className="custom-control-label">Тормозная система</label>
      </div>
    </div>
  }
}
