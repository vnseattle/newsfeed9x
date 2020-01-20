import React, { Component } from 'react'
import style from './style.css'

class RectangleImage extends Component {

    render() {
        var { id, i, src, styleObj } = this.props;
        const customClasses = this.props.classes ? ' ' + this.props.classes : '';

        return (
            <img key={id + "_" + i}
                data-type="RECTANGLE_IMAGE"
                data-id={id}
                className={style.rectangle_img + customClasses}
                style={styleObj}
                src={src} onClick={this.props.onClick} />
        )
    }
}

export default RectangleImage;