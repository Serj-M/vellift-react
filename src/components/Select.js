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
        <label className="input-group-text">ВЫБЕРИТЕ ЛЕБЕДКУ</label>
        <select value={value} onChange={this.handleChange} className="custom-select" id="inputGroupSelect01">
          <option value="All">Все</option>
          <option value="SGR10">SGR10</option>
          <option value="SGR10HR">SGR10ЧР</option>
          <option value="SGR11">SGR11</option>
          <option value="SGR11HR">SGR11ЧР</option>
          <option value="SGR22">SGR22</option>
          <option value="SGR22HR">SGR22ЧР</option>
          <option value="SGR26">SGR26</option>
          <option value="SGR31">SGR31</option>
          <option value="SGR31HR">SGR31ЧР</option>
          <option value="SGR33">SGR33</option>
          <option value="SGR36">SGR36</option>
        </select>
      </div>
    </div>
  }
}
