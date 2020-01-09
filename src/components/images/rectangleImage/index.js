import React, { Component } from 'react'
import style from './style.css'

class RectangleImage extends Component {

    render(){
        var {id,i,src} = this.props;
        return (
            <img key={id+"_"+i}
            data-type="RECTANGLE_IMAGE" 
            data-id={id} 
            className={style.rectangle_img} 
            src={src} onClick={this.props.onClick} />
        )
    }
}

export default RectangleImage;