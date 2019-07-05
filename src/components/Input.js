import React from 'react';

export default class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
           find: ''
         };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(ev) {

  }

  handleClick() {

  }

  render(){
    //const value = this.props.value;
    return <div>
      <div className="input-group mb-3">
        <input onChange={this.handleChange} value={this.state.find} type="text" className="form-control" placeholder="Начните вводить название детали ..." />
        <div className="input-group-append">
          <button onClick={this.handleClick} className="btn btn-primary" type="button">ИСКАТЬ</button>
        </div>
      </div>
    </div>
  }
}
