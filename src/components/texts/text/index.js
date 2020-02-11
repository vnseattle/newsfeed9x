import React, { Component } from 'react'
import style from './style.css'


class TextLight extends Component {

    render() {
        var { id, i, content, styleObj } = this.props;
        const customClasses = this.props.classes ? ' ' + this.props.classes : '';
        return (
            <div key={id + "_" + i}
                className={style.textLight + customClasses}
                style={styleObj}
                onClick={this.props.onClick} >{content}</div>
        )
    }
}

export default TextLight;