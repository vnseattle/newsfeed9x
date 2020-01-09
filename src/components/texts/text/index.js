import React, { Component } from 'react'
import style from './style.css'


class TextLight extends Component {

    render(){
        var {id,i, content} = this.props;
        return (
            <div key={id+"_"+i} 
            className={style.textLight} 
            onClick={this.props.onClick} >{content}</div>
        )
    }
}

export default TextLight;