import React, { Component } from 'react'
import style from './style.css'


class ActLikeShare extends Component {

    render(){
        var {id,i} = this.props;
        return (
            <div key={id+"_"+i} className={style.like_share_cover}>
                 <div data-type="LIKE" data-id={id} className={style.like} onClick={this.props.onClick}>Like</div>
                 <div data-type="SHARE" data-id={id} className={style.share} onClick={this.props.onClick}>Share</div>
            </div>
        )
    }
}

export default ActLikeShare;