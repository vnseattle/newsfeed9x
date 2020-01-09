import React, { Component } from 'react'
import style from './style.css'


class TextBold extends Component {

    render(){
        var {id,i, content} = this.props;
        return (
            <div key={id+"_"+i} 
            className={style.textBold} 
            onClick={this.props.onClick} >{content}</div>
        )
    }
}

export default TextBold;