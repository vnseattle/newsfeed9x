import React, { Component } from 'react'
import style from './style.css'

class CustomButton extends Component {

    render(){
      var {id,i,name} = this.props;
      return (
        <div key={id+"_"+i}>
          <button className={style.custom_button} onClick={this.props.onClick}>{name}</button>
        </div>
      )
    }
}
export default CustomButton;