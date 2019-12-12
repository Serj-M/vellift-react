import React from 'react';

export default class Select extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(ev) {
    // было до всплытия this.setState({value: ev.target.value});
    this.props.onChange(ev.target.value);
  }

  render(){
    const value = this.props.value;
    return <div>
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Тип лебедки</label>
        <select value={value} onChange={this.handleChange} className="custom-select" id="inputGroupSelect01" >
          <option value="All">Выберите</option>
          <option value="SGR11">SGR11 - 13VTR-CR ZAA20006 A1</option>
          <option value="SGR16">SGR16 - 13VTR ZAA9676 B14</option>
          <option value="SGR22">SGR22 - 13VTR-M ZAA9676 B6</option>
          <option value="SGR26">SGR26 - 13VTR ZAA9676 B15</option>
          <option value="SGR31">SGR31 - 13VTR ZAA9676 B3</option>
          <option value="SGR36">SGR36 - 13VTR ZAA9676 B16</option>
        </select>
      </div>
    </div>
  }
}
